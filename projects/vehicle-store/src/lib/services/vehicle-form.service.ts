import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { licensePlateValidator } from '@vehicle/common';
import { Subject, takeUntil } from 'rxjs';

import { VehicleStoreFacade } from '../facades/vehicle-store.facade';

@Injectable()
export class VehicleFormService {
  form?: FormGroup;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private vehicleStoreFacade: VehicleStoreFacade
  ) {}

  build() {
    this.form = this.fb.group({
      type: '',
      subType: '',
      licensePlate: [
        '',
        {
          validators: licensePlateValidator,
          updateOn: 'blur',
        },
      ],
    });
    this.form
      .get('type')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((type) => this.changeType(type));

    return this.form;
  }

  destroy() {
    delete this.form;
  }

  private changeType(type: string | null) {
    this.vehicleStoreFacade.changeType(type);
    const subTypeCtrl = this.form?.get('subType');
    if (type === 'Scooter') {
      subTypeCtrl?.disable();
    } else {
      subTypeCtrl?.enable();
    }
  }
}
