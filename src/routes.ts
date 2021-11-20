import { Router } from 'express'
import { EmployeesController } from './controllers/EmployeesController'
import { EPIController } from './controllers/EPIController'
import { DeliveryEPIController } from './controllers/DeliveryEPIController'

const routes = Router();

//Employees
const employeesController = new EmployeesController();
routes.post('/employees', employeesController.create);

//EPI
const epiController = new EPIController();
routes.post('/epi', epiController.create);

//DeliveryEPI
const deliveryEPIController = new DeliveryEPIController();
routes.post('/entregaepi', deliveryEPIController.create);
routes.get('/entregaepi',deliveryEPIController.index);
routes.delete('/entregaepi/:id', deliveryEPIController.delete);
routes.put('/entregasepi/:id', deliveryEPIController.update);


export { routes }

