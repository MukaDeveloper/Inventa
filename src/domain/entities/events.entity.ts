import { Column, CreateDateColumn, Entity } from "typeorm";

@Entity({ name: 'events' })
export class Events {
    @Column({ name: 'id', type: 'uuid', primary: true, generated: false })
    id!: string;

    @Column({ length: 100 })
    type: string;

    @Column({ type: 'jsonb' })
    payload: Record<string, any>;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;
}