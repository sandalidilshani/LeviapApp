import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserleaveDto {
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  readonly user: number;

  @IsNotEmpty()
  @IsNumber()
  tottotalLeaves: number;

  
}
