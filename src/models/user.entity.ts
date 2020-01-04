import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Audit from './audit.entity';

@Entity()
class User extends Audit {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ type: 'varchar' })
    public firstName!: string;

    @Column({ type: 'varchar' })
    public lastName!: string;

    @Column({ type: 'bool' })
    public isAdmin!: boolean;
}

export default User;
