import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ChatMessage } from './chatMessage.entity';
import { Shift } from './shift.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Shift, (shift) => shift.chat)
  shift: Shift;

  @OneToMany(() => ChatMessage, (message) => message.chat)
  messages: ChatMessage[];
}
