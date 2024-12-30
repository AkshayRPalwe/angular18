import { createReducer, on } from '@ngrx/store';
import { associateState } from './associate.state';
import { loadAssociateFail, loadAssociateSuccess } from './associate.action';

const _associateReducer = createReducer(
  associateState,
  on(loadAssociateSuccess, (state, action) => {
    return {
      ...state,
      associatesList: [...action.associatesList],
      errorMessage: '',
    };
  }),
  on(loadAssociateFail, (state, action) => {
    return {
      ...state,
      associatesList: [],
      errorMessage: action.errorMessage,
    };
  })
);

export function associateReducer(state: any, action: any) {
  return _associateReducer(state, action);
}
