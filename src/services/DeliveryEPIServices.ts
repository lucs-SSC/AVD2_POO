import { getCustomRepository } from 'typeorm';
import { DeliveryEPIRepository } from '../repositories/DeliveryEPIRepository';
import { EmployeesRepository } from '../repositories/EmployeesRepository';
import { EPIRepository } from '../repositories/EPIRepository';


interface IDeliveryEPICreate {
    employees_id: string;
    epi_id: string;
    delivery_date: Date;
    delivery_amount: number;
}

interface IDeliveryEPIID{
    id:string;
}

interface IDeliveryEPIUpdate{
    id: string;
    employees_id: string;
    epi_id: string;
    delivery_date: Date;
    delivery_amount: number;
}

class DeliveryEPIServices {

    async create({ employees_id, epi_id, delivery_date, delivery_amount }: IDeliveryEPICreate) {

        const deliveryEpiRepository = getCustomRepository(DeliveryEPIRepository);

        // const employeesRepository = getCustomRepository(EmployeesRepository);
        // const emp_id = await employeesRepository.findOne(id);

        // if(!emp_id) {
        //     throw new Error('ID do funcionário inválido!')
        // }

        // const epiRepository = getCustomRepository(EPIRepository);
        // const epi_id = await epiRepository.findOne(id);

        // if(!epi_id) {
        //     throw new Error('ID do funcionário inválido!')
        // }
        
        const deliveryEpi = deliveryEpiRepository.create({
            employees_id,
            epi_id,
            delivery_date,
            delivery_amount
        })

        await deliveryEpiRepository.save(deliveryEpi);

        return deliveryEpi;
    }

    async delete({ id }: IDeliveryEPIID) {
        const deliveryEpiRepository = getCustomRepository(DeliveryEPIRepository);

        const deliveryEPI = await deliveryEpiRepository.findOne({id});
        
        if(!deliveryEPI){
            throw new Error('Entrega inválida!')
        }

        return deliveryEpiRepository.delete({id});
    }

    async index(){
        const deliveryEpiRepository = getCustomRepository(DeliveryEPIRepository);
        const deliveryEPI = await deliveryEpiRepository.find();

        return deliveryEPI;
    }

    async update({ id, employees_id, epi_id, delivery_date, delivery_amount}: IDeliveryEPIUpdate) {
        const deliveryEpiRepository = getCustomRepository(DeliveryEPIRepository);

        let deliveryEpi = await deliveryEpiRepository.findOne({ id });
        if (!deliveryEpi) {
            throw new Error(`ID não encontrado`);
        }

        await deliveryEpiRepository.update(id, { employees_id, epi_id, delivery_date, delivery_amount});


        deliveryEpi = await deliveryEpiRepository.findOne({ id });

        return deliveryEpi;
    }

}

export { DeliveryEPIServices }