import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Organization } from './organization.entity';
import { ShiftEvent } from './shiftEvent.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  paid: boolean;

  @ManyToOne(() => Employee, (emp) => emp.payments, {
    onDelete: 'CASCADE',
  })
  employee: Employee;

  @ManyToOne(() => ShiftEvent, (shiftEvent) => shiftEvent.payments, {
    onDelete: 'CASCADE',
  })
  shiftEvent: ShiftEvent;

  @ManyToOne(() => Organization, (org) => org.payments, {
    onDelete: 'CASCADE',
  })
  organization: Organization;
}
