import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChatMessage } from './chatMessage.entity';
import { Organization } from './organization.entity';
import { Payment } from './payment.entity';
import { Role } from './role.entity';
import { User } from './user.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  displayName: string;

  @ManyToOne(() => User, (user) => user.positions, {
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Organization, (org) => org.employees, {
    onDelete: 'CASCADE',
  })
  organization: Organization;

  @OneToMany(() => Payment, (payment) => payment.employee)
  payments: Payment[];

  @OneToMany(() => ChatMessage, (messages) => messages.author)
  messages: ChatMessage[];

  @OneToMany(() => Role, (role) => role.employee)
  roles: Role[];
}
