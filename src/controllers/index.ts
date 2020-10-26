import {
  JsonController,
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from 'routing-controllers';
import { findUser, createUser, updateUser } from '../service/index';
import { Task } from '../interfaces/index';

@JsonController('/user')
export class UserController {
  @Get()
  async getUser() {
    // console.log('name', name);
    const user = await findUser();
    // console.log('findUser');

    return user;
  }

  @Post()
  async createUser(@Body() body: any) {
    console.log('body', body);
    const user = await createUser(body);
    console.log('create User done');

    return user;
  }
  @Put()
  async updateUser(@Body() body: any) {
    console.log('uodateUser');

    const user = await updateUser(body);
    return user;
  }
}
