/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  
  Req,
  UseGuards,
} from '@nestjs/common';
import { PlazeruserService } from './plazeruser.service';
import { CreatePlazeruserDto } from './dto/create-plazeruser.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { RoleGuard } from 'src/utility/guard/role.guard';
import { Role } from 'src/utility/guard/role.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('plazeruser')
export class PlazeruserController {
  constructor(private readonly plazeruserService: PlazeruserService) {}

  @Post()
  create(@Body() createPlazeruserDto: CreatePlazeruserDto) {
    return this.plazeruserService.create(createPlazeruserDto);
  }


  
@UseGuards(LocalAuthGuard)
// @Role('developer')
  @Get()
  findAll() {
    return this.plazeruserService.findAll();
  }
  //@UseGuards(LocalAuthGuard, AuthGuard)
  @Get('/roles/:userId')
  async getuserroles(@Param('userId') userId: number) {
    console.log(userId);
    return this.plazeruserService.getuserroleByUserId(userId);
  }



 //@UseGuards(LocalAuthGuard, RoleGuard)
  //@Role('user')
  @Get('/userdetails/:username')
  findOne(@Param('username') username: string) {
    return this.plazeruserService.findUserByUserName(username);
  }

  @Delete(':id')
  remove() {
    //return this.plazeruserService.remove();
  }

  @Get('/leaves/:userid')
  async getUserLeaveRequest(@Param('userid', ParseIntPipe) userid: number) {
    return this.plazeruserService.getUserLeaveRequest(userid);
  }

  @Get('/pendingleaves/:userid')
  async getPendingRequests(@Param('userid', ParseIntPipe) userid: number) {
    return this.plazeruserService.getPendingRequestsbyHR(userid);
  }


  //Hr Manager End points
  @Get('/userdetails')
  findUserOne(@Body('username') username: string, @Req() req) {
    console.log(req.user);
    return this.plazeruserService.findUserByUserName(req.user);
  }
  //get users count
  @Get('/usercount')
  usercount(){
    return this.plazeruserService.usercount()
  }

  //get user details and leave details by leave id 
  @Get('/getleavedetails/:leaveId')
  async getUserDetailsByLeaveId(@Param('leaveId',ParseIntPipe)leaveId:number){
    console.log(leaveId)
    return this.plazeruserService.getUserDetailsByLeaveId(leaveId)

  }

  //get relvent user leave counts
  
  
}
