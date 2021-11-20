import { getCustomRepository } from 'typeorm';
import { EPIRepository } from '../repositories/EPIRepository';


interface IEPICreate {
    name: string;
    validity: number;
    CA: number;
}

class EPIServices {

    async create({ name, validity, CA }: IEPICreate) {

        const epiRepository = getCustomRepository(EPIRepository);

        const epi = epiRepository.create({
            name,
            validity,
            CA
        })

        await epiRepository.save(epi);

        return epi;
    }

}

export { EPIServices }