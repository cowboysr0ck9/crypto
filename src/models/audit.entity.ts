import { Column, Entity } from 'typeorm';

// All Entity Models should extend from this audit & complinace model

@Entity()
class Audit {
    @Column()
    public createdAt!: Date;

    @Column()
    public createdBy!: string;

    @Column()
    public updatedAt!: Date;

    @Column()
    public updatedBy!: string;
}

export default Audit;
