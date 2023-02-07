import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  codeVerify: number;

  registered: boolean;
}

export class LoginUserDto {
  @ApiProperty() @IsNotEmpty() email: string;
  @ApiProperty() @IsNotEmpty() password: string;
}

export class EmailDto {
  @ApiProperty()
  @IsNotEmpty()
  email: string;
}

export interface AuthResponse {
  email: string;
  token: string;
}
