import { Course } from "src/course/entities/course.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";




@Entity()
export class Enrollment {
    @PrimaryGeneratedColumn()
    id:number;
    @ManyToOne(()=>User)
    @JoinColumn({name:"UserId"})
    student:User;
    @ManyToOne(()=>Course)
    @JoinColumn({name:"courseId"})
    course:Course;
    @CreateDateColumn()
    enrolledAt: Date;

    @OneToMany(() => Enrollment, (enrollment) => enrollment.course)
    enrollments: Enrollment[];
}
