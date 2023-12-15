import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async findAllUser() {
    try {
      return await this.userService.findAllUser();
    } catch (error) {
      console.error(error);
    }
  }

  @Post('/signUp')
  async signUpUser(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.userService.signUpUser(createUserDto);
    } catch (error) {
      console.error(error);
    }
  }

  @Post('/signIn')
  @HttpCode(200)
  async signInUser(@Body() userSubmittedSignInData: any) {
    try {
      return await this.userService.signInUser(userSubmittedSignInData);
    } catch (error) {
      console.error(error);
    }
  }
}
