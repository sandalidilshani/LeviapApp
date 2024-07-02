// src/auth/auth.controller.ts

import { Body, Controller, Get, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { PlazeruserService } from 'src/plazeruser/plazeruser.service';
import { AuthService } from './auth.service';
import { userSignInDto } from './dto/user-signin.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private plazeruserservice: PlazeruserService,
    private authservice: AuthService,
  ) {}


  
  @Post('/login')
  async signIn(@Body() userSignInDto: userSignInDto) {

    return this.authservice.signIn(userSignInDto);

    
  }
  
}
