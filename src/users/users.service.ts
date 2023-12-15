import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

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
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

      const createdUser = new this.userModal({
        ...createUserDto,
        password: hashedPassword,
      });

      return await createdUser.save();
    } catch (error) {
      // handle error
      console.error(error);
    }
  }

  async signInUser(userSubmittedSignInData: any): Promise<any> {
    try {
      const user = await this.userModal.findOne({
        emailId: userSubmittedSignInData.emailId,
      });
      if (!user) {
        throw new Error('User not found');
      }

      const isPasswordMatching = await bcrypt.compare(
        userSubmittedSignInData.password,
        user.password,
      );
      if (!isPasswordMatching) {
        throw new Error('Invalid credentials');
      }

      return user;
    } catch (error) {
      console.error(error);
    }
  }
}
