import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Plazeruser } from 'src/plazeruser/entities/plazeruser.entity';
@Entity()
export class UserLeave {
  @PrimaryGeneratedColumn()
  userLevaveCountId: number;

  @Column()
  availableLeaves: number;

  @Column()
  totalLeaves: number;

  @OneToOne(() => Plazeruser)
  @JoinColumn({ name: 'userUserId', referencedColumnName: 'userId' })
  user: Plazeruser;
}
