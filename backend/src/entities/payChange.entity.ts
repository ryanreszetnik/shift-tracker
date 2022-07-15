import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class PayChange {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  old: number;

  @Column()
  new: number;

  @Column()
  timestamp: Date;

  @ManyToOne(() => Role, (role) => role.payChanges, {
    onDelete: 'CASCADE',
  })
  role: Role;
}
