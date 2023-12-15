import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async findAllUser() {
    return this.userService.findAllUser();
  }
  @Post('/signUp')
  async signUpUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.signUpUser(createUserDto);
  }
}
