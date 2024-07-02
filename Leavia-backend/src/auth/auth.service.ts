import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userSignInDto } from 'src/auth/dto/user-signin.dto';
import { PlazeruserService } from 'src/plazeruser/plazeruser.service';

@Injectable()
export class AuthService {
  constructor(
    private plazeruserservice: PlazeruserService,
    private jwtservice: JwtService,
  ) {}

 

  async signIn(usersignindto: userSignInDto) {
    const { username, userpassword } = usersignindto;
    const user = await this.plazeruserservice.findUserByUserName(username);   

    if (!user) {
      throw new UnauthorizedException('invalid username');
    }
    if (user.userPassword !== userpassword) {
      console.log(user.userPassword, userpassword);
      throw new UnauthorizedException('invalid password');    
    }
    const payload={username:user.userName,sub:user.userId};
    const access_token=this.jwtservice.sign(payload);
    return {accesstoken:access_token}
  }
}