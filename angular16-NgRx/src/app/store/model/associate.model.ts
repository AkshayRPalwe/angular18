export interface Associates {
  id: number;
  name: string;
  email: string;
  phone: string;
  type: string;
  address: string;
  associateGroup: string;
  status: boolean;
}

export interface AssociatesModel {
  associatesList: Associates[];
  associateObj: Associates;
  errorMessage: string;
}
