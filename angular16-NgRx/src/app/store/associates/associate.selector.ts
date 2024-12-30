import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AssociatesModel } from '../model/associate.model';

const getAssociateState = createFeatureSelector<AssociatesModel>('associate');

export const getAssociateList = createSelector(getAssociateState, (state) => {
  return state.associatesList;
});
