import { Injectable } from '@nestjs/common';
import { users } from 'src/mock/mock';

@Injectable()
export class UserService {

  getUsers(){
    return users;
  }
  
}
