import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from './employee.entity';
import { PayChange } from './payChange.entity';
import { RoleType } from './roleType.entity';
import { Shift } from './shift.entity';
import { ShiftReplacement } from './shiftReplacement.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  payRate: number;

  @ManyToOne(() => RoleType, (type) => type.roles, {
    onDelete: 'CASCADE',
  })
  roleType: RoleType;

  @ManyToMany(() => Shift, (shift) => shift.roles)
  shifts: Shift[];

  @ManyToOne(() => Employee, (emp) => emp.roles, {
    onDelete: 'CASCADE',
  })
  employee: Employee;

  @OneToMany(() => ShiftReplacement, (replacement) => replacement.replacement)
  temporaryShifts: ShiftReplacement;

  @OneToMany(() => ShiftReplacement, (replacement) => replacement.original)
  replacedShifts: ShiftReplacement;

  @OneToMany(() => PayChange, (payChange) => payChange.role)
  payChanges: PayChange[];
}
