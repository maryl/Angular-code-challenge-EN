import { FormControl } from '@angular/forms';
import { KentekenCheck } from 'rdw-kenteken-check';

export function licensePlateValidator(ctrl: FormControl) {
  const value = ctrl.value;
  if (value) {
    const kentekenCheck = new KentekenCheck(value);

    kentekenCheck.formatLicense();

    if (!kentekenCheck.valid) {
      return {
        licensePlate: {
          valid: false,
        },
      };
    }
  }
  return null;
}
