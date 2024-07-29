import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './dto';

@ApiTags('User')
@Controller('user')
export class UserController {

  constructor(private readonly _userService: UserService){}

  @Post('create-user')
  createUser(@Body() dto: CreateUserDTO){
    return 'hui'
  }
}
