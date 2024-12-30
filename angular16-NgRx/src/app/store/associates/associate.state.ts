import { AssociatesModel } from '../model/associate.model';

export const associateState: AssociatesModel = {
  associatesList: [],
  errorMessage: '',
  associateObj: {
    id: 0,
    name: '',
    email: '',
    phone: '',
    type: 'CUSTOMER',
    address: '',
    associateGroup: 'level1',
    status: true,
  },
};
