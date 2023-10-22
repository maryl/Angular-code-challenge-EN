import { createFeatureSelector } from '@ngrx/store';
import { VEHICLE_STORE_KEY } from '../vehicle-store.const';
import { VehicleStoreState } from '../reducers';

export const getVehicleFeature =
  createFeatureSelector<VehicleStoreState>(VEHICLE_STORE_KEY);
