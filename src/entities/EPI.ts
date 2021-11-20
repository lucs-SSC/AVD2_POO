import { 
    Entity,
    PrimaryColumn, 
    Column, 
    UpdateDateColumn,
    CreateDateColumn
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('epi')
class EPI {
    
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    validity: number;

    @Column()
    CA: number;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { EPI }