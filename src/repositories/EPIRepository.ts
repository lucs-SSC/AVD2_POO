import { EntityRepository, Repository } from 'typeorm';
import { EPI } from '../entities/EPI';

@EntityRepository(EPI)
class EPIRepository extends Repository<EPI> {

}

export { EPIRepository }