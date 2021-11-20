import { Request, Response } from 'express'
import { DeliveryEPIServices } from '../services/DeliveryEPIServices'

class DeliveryEPIController {

    async create(req: Request, res: Response) {
        let { employees_id, epi_id, delivery_date, delivery_amount } = req.body
        delivery_date = new Date(delivery_date)
        
        const deliveryEPIServices = new DeliveryEPIServices()

        try {
            const deliveryEPI = await deliveryEPIServices.create({ employees_id, epi_id, delivery_date, delivery_amount})
            return res.json(deliveryEPI)
        } catch(error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }
    
    async index(req: Request, res: Response) {
        const deliveryEPIServices = new DeliveryEPIServices()

        try {
            const deliveryEPI = await deliveryEPIServices.index()
            return res
                    .status(200)
                    .json(deliveryEPI)
        } catch (error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }
    
    async delete(req: Request, res: Response) {
        const deliveryEPIServices = new DeliveryEPIServices();

        const { id } = req.params;

        try {
            await deliveryEPIServices.delete({ id });
            return res
                .status(200)
                .json({ message: `Entrega excluida com sucesso.` })
        } catch (error) {
            return res
                .status(400)
                .json({ message: error.message });
        }
    }
    
    async update(req: Request, res: Response) {
        const { employees_id, epi_id, delivery_date, delivery_amount } = req.body;
        const { id } = req.params;

        const deliveryEPIServices = new DeliveryEPIServices();

        try {
            const deliveryEPI = await deliveryEPIServices.update({id, employees_id, epi_id, delivery_date, delivery_amount });
            return res
                    .status(200)
                    .json(deliveryEPI);
        } catch (error) {
            return res
                    .status(400)
                    .json({ message: error.message })
        }
    }
    
}

export { DeliveryEPIController }