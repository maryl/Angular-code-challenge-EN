import { switchMap, map, of, catchError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, OnInitEffects, createEffect, ofType } from '@ngrx/effects';

import { FormActions } from '../actions';
import { VehicleService } from '../services';

@Injectable()
export class VisitedEffects implements OnInitEffects {
  ngrxOnInitEffects() {
    return FormActions.load();
  }

  loadOptions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FormActions.load),
      switchMap(() =>
        this.vehicleService.getVehicleOptions().pipe(
          map(({ types, autoOptions, motorOptions }) =>
            FormActions.loadSuccess({ types, autoOptions, motorOptions })
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              FormActions.loadFailure({
                error: error.message ?? error.toString(),
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private vehicleService: VehicleService
  ) {}
}
