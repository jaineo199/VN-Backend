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
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);

    return this.userService.createUser(createUserDto);
  }
}
