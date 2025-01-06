import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Grocery } from '../../../models/grocery.model';

// export const selectGroceries = (state: { groceries: Grocery[] }) => state.groceries;
// OR
export const selectGroceries = createFeatureSelector<Grocery[]>('groceries');

export const selectGroceryByType = (type: string) =>
  createSelector(selectGroceries, (state) => {
    console.warn('selectGroceryByType');
    return state.filter((item) => item.type === type);
  });
