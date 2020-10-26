
import { Task } from './Task'
import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";

@Entity()
export class User {

    @Column({ primary: true, type: 'uuid', generated: 'uuid' })
    userId: string;

    @Column()
    userName: string;

    @ManyToMany (()=> Task, (task) => task.taskId)
    @JoinTable()
    tasks: Task[]


}
