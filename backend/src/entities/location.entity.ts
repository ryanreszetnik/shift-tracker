import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Organization } from './organization.entity';
import { Shift } from './shift.entity';

@Entity()
export class OrgLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne(() => Organization, (org) => org.locations, {
    onDelete: 'CASCADE',
  })
  organization: Organization;

  @OneToMany(() => Shift, (shift) => shift.location)
  shifts: Shift[];
}
