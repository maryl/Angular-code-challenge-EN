import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { FormActions } from '../actions';
import { VehicleStoreState } from '../reducers';
import { getImage, getSubTypeOptions, getTypes } from '../selectors';

@Injectable()
export class VehicleStoreFacade {
  readonly image$ = this.store.select(getImage);
  readonly typeOptions$ = this.store.select(getTypes);
  readonly subTypeOptions$ = this.store.select(getSubTypeOptions);

  constructor(private store: Store<VehicleStoreState>) {}

  changeType(type: string | null) {
    this.store.dispatch(FormActions.changeType({ vehicleType: type }));
  }
}
