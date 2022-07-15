import { Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';
import { ShiftEvent } from './shiftEvent.entity';

@Entity()
export class ShiftReplacement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ShiftEvent, (shiftEvent) => shiftEvent.shiftReplacements, {
    onDelete: 'CASCADE',
  })
  event: ShiftEvent;

  @ManyToOne(() => Role, (role) => role.replacedShifts, {
    onDelete: 'CASCADE',
  })
  original: Role;

  @ManyToOne(() => Role, (role) => role.temporaryShifts, {
    onDelete: 'CASCADE',
  })
  replacement: Role;
}
