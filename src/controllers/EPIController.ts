import { Request, Response } from 'express'
import { EPIServices } from '../services/EPIServices'

class EPIController {

    async create(req: Request, res: Response) {
        const { name, validity, CA } = req.body

        const epiServices = new EPIServices()

        try {
            const epi = await epiServices.create({ name, validity, CA })
            return res.json(epi)
        } catch(error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }
}

export { EPIController }
