import { User } from './User';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
@Entity()
export class Task {
  @Column({ primary: true, type: 'uuid', generated: 'uuid' })
  taskId: string;

  @Column()
  taskName: string;
  @Column()
  date: string;

  @ManyToMany(() => User, (user) => user.userId)
  users: User[];
}
