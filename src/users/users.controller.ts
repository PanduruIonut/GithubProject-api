import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  index(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post('id')
  getUserInfo(@Body() user: User): Promise<any> {
    console.log('username: ' + user);
    return this.usersService.findOne(user);
  }

  @Post('login')
  async login(@Body() username: string): Promise<any> {
    console.log(username);
    const user = this.usersService.findByUsername(username);

    // const user = await this.usersService.findOne(username);
    if ((await user).lastName == 'jokke') {
      return 'LOGIN SUCCESSFULL';
    }
  }
  @Post('create')
  async create(@Body() userData: User): Promise<any> {
    console.log(userData);
    return this.usersService.create(userData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() userData: User): Promise<any> {
    userData.id = Number(id);
    console.log('Update #' + userData.id);
    return this.usersService.update(userData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.usersService.delete(id);
  }
}
