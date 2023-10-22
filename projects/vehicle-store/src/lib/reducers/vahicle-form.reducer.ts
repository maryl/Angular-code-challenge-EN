import { createReducer, on } from '@ngrx/store';

import { FormActions } from '../actions';

export interface VehicleFormState {
  types: string[];
  autoOptions: string[];
  motorOptions: string[];
  loading: boolean;
  selectedType: string | null;
}

const initialState: VehicleFormState = {
  types: [],
  autoOptions: [],
  motorOptions: [],
  loading: false,
  selectedType: null,
};

export const vehicleFormReducer = createReducer(
  initialState,
  on(FormActions.load, (state) => ({ ...state, loading: true })),
  on(
    FormActions.loadSuccess,
    (state, { types, autoOptions, motorOptions }) => ({
      ...state,
      types,
      autoOptions,
      motorOptions,
      loading: false,
    })
  ),
  on(FormActions.loadFailure, (state) => ({ ...state, loading: false })),
  on(FormActions.changeType, (state, { vehicleType }) => ({
    ...state,
    selectedType: vehicleType,
  }))
);
