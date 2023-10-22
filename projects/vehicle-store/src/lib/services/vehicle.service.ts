import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const types = ['Auto', 'Motor', 'Scooter'];

const autoOptions = [
  'Hatchback',
  'Sedan',
  'Station',
  'Cabriolet',
  'Coupé',
  'Multi Purpose Vehicle (MVP)',
  'Terreinauto',
];

const motorOptions = [
  'All-road',
  'Naked',
  'Enduro',
  'Race',
  'Toermotor',
  'Chopper',
  'Zijspan',
];

@Injectable()
export class VehicleService {
  getVehicleOptions() {
    return of({ types, autoOptions, motorOptions });
  }
}
