import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title:string;
    @Column({nullable:true})
    imageUrl:string;
    @Column()
    duration:number;
    @ManyToOne(()=>User,{eager:true})
    @JoinColumn({name:"teacherId"})
    teacher:User;
}