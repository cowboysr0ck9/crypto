import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Audit from './audit.entity';
@Entity()
class Post extends Audit {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public title!: string;

    @Column()
    public content!: string;
}

export default Post;
