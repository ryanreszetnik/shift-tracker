import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Payment } from './payment.entity';
import { Shift } from './shift.entity';
import { ShiftReplacement } from './shiftReplacement.entity';

@Entity()
export class ShiftEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: Date;

  @Column()
  endime: Date;

  @ManyToOne(() => Shift, (shift) => shift.shiftEvents, {
    onDelete: 'CASCADE',
  })
  shift: Shift;

  @OneToMany(() => ShiftReplacement, (replacement) => replacement.event)
  shiftReplacements: ShiftReplacement[];

  @OneToMany(() => Payment, (payment) => payment.shiftEvent)
  payments: Payment[];
}
