import { createAction, props } from '@ngrx/store';
import { VEHICLE_STORE_KEY } from '../vehicle-store.const';

export const load = createAction(`[${VEHICLE_STORE_KEY}/Form] Load`);

export const loadSuccess = createAction(
  `[${VEHICLE_STORE_KEY}/Form] Load success`,
  props<{ types: string[]; autoOptions: string[]; motorOptions: string[] }>()
);

export const loadFailure = createAction(
  `[${VEHICLE_STORE_KEY}/Form] Load failure`,
  props<{ error: string }>()
);

export const changeType = createAction(
  `[${VEHICLE_STORE_KEY}/Form] Change`,
  props<{ vehicleType: string | null }>()
);
