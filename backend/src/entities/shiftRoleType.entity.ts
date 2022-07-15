import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoleType } from './roleType.entity';
import { Shift } from './shift.entity';

@Entity()
export class ShiftRoleType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Shift, (shift) => shift.shiftRoleTypes, {
    onDelete: 'CASCADE',
  })
  shift: Shift;

  @ManyToOne(() => RoleType, (roleType) => roleType.shiftRoleTypes, {
    onDelete: 'CASCADE',
  })
  roleType: RoleType;
}
