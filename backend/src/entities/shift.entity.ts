import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Chat } from './chat.entity';
import { OrgLocation } from './location.entity';
import { Organization } from './organization.entity';
import { Role } from './role.entity';
import { ShiftEvent } from './shiftEvent.entity';
import { ShiftRoleType } from './shiftRoleType.entity';

@Entity()
export class Shift {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => OrgLocation, (loc) => loc.shifts, {
    onDelete: 'CASCADE',
  })
  location: OrgLocation;

  @ManyToOne(() => Organization, (org) => org.shifts, {
    onDelete: 'CASCADE',
  })
  organization: Organization[];

  @OneToMany(() => ShiftEvent, (shiftEvent) => shiftEvent.shift)
  shiftEvents: ShiftEvent[];

  @OneToMany(() => ShiftRoleType, (shiftRoleType) => shiftRoleType.shift)
  shiftRoleTypes: ShiftRoleType[];

  @OneToOne(() => Chat, (chat) => chat.shift)
  chat: Chat;

  @ManyToMany(() => Role, (role) => role.shifts)
  roles: Role[];
}
