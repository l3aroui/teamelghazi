import { Course } from "src/course/entities/course.entity";
import { Enrollment } from "src/enrollment/entities/enrollment.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



export enum Role{
    ADMIN="admin",TEACHER="teacher",ETUDIANT="etudiant",
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fullname:string;
    @Column({ unique: true })
    email:string;
    @Column({ unique: true })
    phoneNumber:string;
    @Column()
    password:string;
    @Column({type:"enum",enum:Role,default:Role.ETUDIANT})
    roles:Role[];
    @CreateDateColumn()
    createdAt:Date;
    @UpdateDateColumn()
    updatedAt:Date;
    @OneToMany(() => Course, (course) => course.teacher)
    courses: Course[];
    @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
    enrollments: Enrollment[];
}
