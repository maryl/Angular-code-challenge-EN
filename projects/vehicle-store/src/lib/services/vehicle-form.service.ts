import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { licensePlateValidator } from '@vehicle/common';

@Injectable()
export class VehicleFormService {
  constructor(private fb: FormBuilder) {}

  build() {
    return this.fb.group({
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
  }
}
