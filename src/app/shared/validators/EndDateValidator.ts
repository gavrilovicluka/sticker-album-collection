import { AbstractControl, ValidatorFn } from "@angular/forms";

export function EndDateValidator(startDateControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const endDate = control.value;
        const startDate = control.root.get(startDateControlName)?.value;

        if (startDate && endDate && startDate > endDate) {
            return { 'endDateInvalid': true };
        }

        return null;
    };
}