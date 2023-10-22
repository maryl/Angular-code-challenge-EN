import { createSelector } from '@ngrx/store';
import { getVehicleFeature } from './common.selectors';

export const getFormState = createSelector(
  getVehicleFeature,
  (state) => state.vehicleFormReducer
);

// export const get = createSelector(getFormState, (state) => state.);
export const getTypes = createSelector(getFormState, (state) => state.types);

export const getSelectedType = createSelector(
  getFormState,
  (state) => state.selectedType
);

export const getSubTypeOptions = createSelector(
  getFormState,
  getSelectedType,
  (state, type) => {
    switch (type) {
      case 'Auto':
        return state.autoOptions;
      case 'Motor':
        return state.motorOptions;
      default:
        return [];
    }
  }
);

export const getImage = createSelector(getSelectedType, (type) =>
  type ? `./assets/${type.toLocaleLowerCase()}.jpg` : './assets/auto.jpg'
);
