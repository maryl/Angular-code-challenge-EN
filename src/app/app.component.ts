import { Component, OnDestroy } from '@angular/core';
import { VehicleFormService, VehicleStoreFacade } from '@vehicle/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  typeOptions$ = this.vehicleStoreFacade.typeOptions$;
  subTypeOptions$ = this.vehicleStoreFacade.subTypeOptions$;
  image$ = this.vehicleStoreFacade.image$;
  vehicleForm = this.vehicleFormService.build();

  constructor(
    private vehicleFormService: VehicleFormService,
    private vehicleStoreFacade: VehicleStoreFacade
  ) {}

  ngOnDestroy() {
    this.vehicleFormService.destroy();
  }
}
