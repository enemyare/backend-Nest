import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly _userService: UserService){

  }

  @Get('get-users')
  getUsers(){
    return this._userService.getUsers()
  }

}
