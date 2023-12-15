import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModal: Model<User>) {}

  async findAllUser(): Promise<User[]> {
    try {
      return await this.userModal.find().exec();
    } catch (error) {
      // handle error
      console.error(error);
    }
  }

  async signUpUser(createUserDto: CreateUserDto): Promise<any> {
    try {
      const createdUser = new this.userModal(createUserDto);
      return await createdUser.save();
    } catch (error) {
      // handle error
      console.error(error);
    }
  }
}
