import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Body
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { User } from './users/user.entity';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('auth/create')
  async create(@Body() userData: User): Promise<any> {
    console.log('create log:', userData);
    return this.authService.create(userData);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
