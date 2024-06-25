import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column({ type: 'text', nullable: true })
    Description: string;

    @Column()
    Location: string;

    @Column()
    Latitude: string;

    @Column()
    Longitude: string;

    @Column()
    OpenHrs: string;

    @Column({ nullable: true})
    fileImage?: string;

}
