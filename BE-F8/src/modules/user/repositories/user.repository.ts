import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/base/base.repository';
import { User } from '../models/user.model';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(
    @InjectModel('Users')
    private readonly userModel: Model<User>,
  ) {
    super(userModel);
  }
}
