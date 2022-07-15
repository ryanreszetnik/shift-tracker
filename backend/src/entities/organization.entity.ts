import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { OrgLocation } from './location.entity';
import { Payment } from './payment.entity';
import { RoleType } from './roleType.entity';
import { Shift } from './shift.entity';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Employee, (emp) => emp.organization)
  employees: Employee[];

  @OneToMany(() => OrgLocation, (loc) => loc.organization)
  locations: OrgLocation[];

  @OneToMany(() => RoleType, (roleType) => roleType.organization)
  roleTypes: RoleType[];

  @OneToMany(() => Shift, (shift) => shift.organization)
  shifts: Shift[];

  @OneToMany(() => Payment, (payment) => payment.organization)
  payments: Payment[];
}
