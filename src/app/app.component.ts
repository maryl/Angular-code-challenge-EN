import { Subject, takeUntil } from 'rxjs';
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

  private destroy$ = new Subject<void>();

  constructor(
    private vehicleFormService: VehicleFormService,
    private vehicleStoreFacade: VehicleStoreFacade
  ) {
    this.vehicleForm
      .get('type')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((type) => this.vehicleStoreFacade.changeType(type));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
