import { EntityRepository, Repository } from 'typeorm';
import { DeliveryEPI } from '../entities/DeliveryEPI';

@EntityRepository(DeliveryEPI)
class DeliveryEPIRepository extends Repository<DeliveryEPI> {

}

export { DeliveryEPIRepository }