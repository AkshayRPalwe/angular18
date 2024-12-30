import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AssociateService } from '../../service/associate.service';
import {
  loadAssociate,
  loadAssociateFail,
  loadAssociateSuccess,
} from './associate.action';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class AssociateEffects {
  constructor(
    private actions$: Actions,
    private _associateService: AssociateService
  ) {}

  _loadAssociate = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAssociate),
      exhaustMap(() => {
        return this._associateService.getAllAssociates().pipe(
          map((data) => {
            return loadAssociateSuccess({ associatesList: data });
          }),
          catchError((error) => of(loadAssociateFail({ errorMessage: error })))
        );
      })
    );
  });
}
