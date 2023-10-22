import { combineReducers } from '@ngrx/store';

import { vehicleFormReducer, VehicleFormState } from './vahicle-form.reducer';

export interface VehicleStoreState {
  vehicleFormReducer: VehicleFormState;
}

export const vehicleStoreReducers = combineReducers({
  vehicleFormReducer: vehicleFormReducer,
});
