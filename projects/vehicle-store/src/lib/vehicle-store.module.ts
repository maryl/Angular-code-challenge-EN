import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';
import { VEHICLE_STORE_EFFECTS } from './effects';
import { vehicleStoreReducers } from './reducers';
import { VEHICLE_STORE_KEY } from './vehicle-store.const';
import { VehicleStoreFacade } from './facades/vehicle-store.facade';
import { VehicleFormService, VehicleService } from './services';

@NgModule({
  imports: [
    StoreModule.forFeature(VEHICLE_STORE_KEY, vehicleStoreReducers),
    EffectsModule.forFeature(VEHICLE_STORE_EFFECTS),
  ],
  providers: [VehicleStoreFacade, VehicleService, VehicleFormService],
})
export class VehicleStoreModule {}
