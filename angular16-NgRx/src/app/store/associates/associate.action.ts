import { createAction, props } from '@ngrx/store';
import { Associates } from '../model/associate.model';

export const LOAD_ASSOCIATES = '[Associate Component] Load Associate';
export const LOAD_ASSOCIATES_SUCCESS =
  '[Associate Component] Load Associate Success';
export const LOAD_ASSOCIATES_FAIL = '[Associate Component] Load Associate Fail';

export const loadAssociate = createAction(LOAD_ASSOCIATES);
export const loadAssociateSuccess = createAction(
  LOAD_ASSOCIATES_SUCCESS,
  props<{ associatesList: Associates[] }>()
);
export const loadAssociateFail = createAction(
  LOAD_ASSOCIATES_SUCCESS,
  props<{ errorMessage: string }>()
);
