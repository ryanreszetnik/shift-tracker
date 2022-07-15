import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Organization } from './organization.entity';
import { Role } from './role.entity';
import { ShiftRoleType } from './shiftRoleType.entity';

@Entity()
export class RoleType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  baseRate: number;

  @ManyToOne(() => Organization, (org) => org.roleTypes, {
    onDelete: 'CASCADE',
  })
  organization: Organization;

  @OneToMany(() => ShiftRoleType, (shiftRoleType) => shiftRoleType.roleType, {
    cascade: true,
  })
  shiftRoleTypes: ShiftRoleType[];

  @OneToMany(() => Role, (role) => role.roleType, { cascade: true })
  roles: Role[];
}
