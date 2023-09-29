import { AbstractControl, ValidatorFn } from '@angular/forms';

export function imageFileValidator(): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any } | null => {
        const file = control.value;

        const allowedExtensions = ['.jpg', '.jpeg', '.png'];
        const fileExtension = file.slice(((file.lastIndexOf(".") - 1) >>> 0) + 2);

        if (file && allowedExtensions.indexOf('.' + fileExtension.toLowerCase()) === -1) {
            return { 'invalidImageExtension': true };
        }

        return null;
    };

}
