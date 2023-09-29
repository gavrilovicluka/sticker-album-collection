import { AbstractControl, ValidatorFn } from "@angular/forms";

export function StartDateValidator(endDateControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const startDate = control.value;
        const endDate = control.root.get(endDateControlName)?.value;

        if (startDate && endDate && startDate > endDate) {
            return { 'startDateInvalid': true };
        }

        return null;
    };
}