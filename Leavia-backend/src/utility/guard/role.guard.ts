import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PlazeruserService } from 'src/plazeruser/plazeruser.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private plazeruserservice: PlazeruserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRole = this.reflector.get<string[]>('roles', context.getHandler());
    console.log("required role= " + requiredRole);

    if (!requiredRole) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    console.log(user.username);
    const userrole = await this.getuserrole(user.username);

    return requiredRole.includes(userrole);
  }

  async getuserrole(userId: number): Promise<any> {
    const userRole = await this.plazeruserservice.getuserroleByUserId(userId);
    console.log("current user role = " + userRole);
//    // if (userRole === 'HRManager') {
//       return 'developer';
//     } else {
//       return userRole;
return userRole;
//     }
  }
}
