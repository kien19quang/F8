import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/modules/email/email.service';
import { BaseResponse } from 'src/shared/base/base.response';
import { AuthResponse, CreateUserDto, LoginUserDto } from '../dto/user.dto';
import { User } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly emailService: EmailService,
    private readonly userRepository: UserRepository,
  ) {}

  register = async (userDto: CreateUserDto) => {
    const user = await this.userService.create(userDto);
    const token = await this.jwtService.signAsync({ email: user.email });
    const res = { email: user.email, token };
    return BaseResponse<AuthResponse>(res, 'ok', HttpStatus.OK, true);
  };

  login = async (loginUserDto: LoginUserDto) => {
    const user = await this.userService.findByLogin(loginUserDto);
    const token = await this.jwtService.signAsync({ email: user.email });
    return BaseResponse<AuthResponse>(
      { email: user.email, token },
      'ok',
      HttpStatus.OK,
      true,
    );
  };

  async checkEmailUser(email: string) {
    const user = await this.userService.findByEmail(email);
    if (user && user.registered) {
      return BaseResponse<string>(user.email, 'ok', HttpStatus.OK, true);
    } else {
      return BaseResponse<any>(
        undefined,
        'This email does not exist',
        HttpStatus.BAD_REQUEST,
        false,
      );
    }
  }

  async sendCodeVerify(email: string) {
    const codeVerify: number =
      Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

    const data = { email, codeVerify } as CreateUserDto;

    await this.userRepository.create(data);
    return this.emailService.sendMail({
      to: email,
      subject: `${codeVerify} là mã xác minh của bạn`,
      text: `Mã xác minh tại F8 Để xác minh tài khoản của bạn, hãy nhập mã này vào F8: ${codeVerify} Mã xác minh sẽ hết hạn sau 48 giờ. Nếu bạn không yêu cầu mã, bạn có thể bỏ qua`,
    });
  }

  validateUser = async (email: string) => {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  };

  private async _createToken({ email }, refresh = true) {
    const accessToken = this.jwtService.sign({ email });
    if (refresh) {
      const refreshToken = this.jwtService.sign(
        { email },
        {
          secret: process.env.SECRETKEY_REFRESH,
          expiresIn: process.env.EXPIRESIN_REFRESH,
        },
      );

      await this.userService.update(
        { email: email },
        { refreshToken: refreshToken },
      );

      return {
        expiresIn: process.env.EXPIRESIN,
        accessToken,
        refreshToken,
        expiresInRefresh: process.env.EXPIRESIN_REFRESH,
      };
    } else {
      return {
        expiresIn: process.env.EXPIRESIN,
        accessToken,
      };
    }
  }

  async refresh(refresh_token) {
    try {
      const payload = await this.jwtService.verify(refresh_token, {
        secret: process.env.SECRETKEY_REFRESH,
      });

      const user = await this.userService.getUserByRefresh(
        refresh_token,
        payload.email,
      );

      const token = await this._createToken(user, false);

      return {
        email: user.email,
        ...token,
      };
    } catch (e) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }

  async logout(user: User) {
    await this.userService.update(
      { email: user.email },
      { refreshToken: null },
    );
  }
}
