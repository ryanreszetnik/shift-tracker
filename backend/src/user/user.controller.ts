import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { User } from '@entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  async create(@Body() user: User): Promise<any> {
    if ((await this.userService.getUserByEmail(user.email)) !== null) {
      throw new HttpException(
        'User with email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.userService.createUser(user);
  }

  @Get('/:id')
  get(@Param('id') id: number): Promise<any> {
    return this.userService.getUserById(id);
  }
}
