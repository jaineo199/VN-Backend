import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service';
@Controller('Users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async findAllUser() {
    return this.userService.findAllUser();
  }
}
