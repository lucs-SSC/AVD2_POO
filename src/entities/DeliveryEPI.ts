import { 
    Entity,
    PrimaryColumn,
    Column,
    UpdateDateColumn,
    CreateDateColumn,
    JoinColumn,
    ManyToOne
} from 'typeorm';

import { v4 as uuid } from 'uuid';

import { Employees } from './Employees';
import { EPI } from './EPI';

@Entity('deliveryEPI')
class DeliveryEPI {

    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'employees_id' })
    @ManyToOne(() =>  Employees )
    employees: Employees;

    @Column()
    employees_id: string;

    @JoinColumn({ name: 'epi_id' })
    @ManyToOne(() => EPI )
    epi: EPI;

    @Column()
    epi_id: string;

    @Column()
    delivery_amount: number;

    @Column()
    delivery_date: Date;

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

export { DeliveryEPI }