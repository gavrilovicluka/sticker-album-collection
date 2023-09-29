import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuctionDto } from 'src/app/models/auction';
import { EndDateValidator } from 'src/app/shared/validators/EndDateValidator';
import { imageFileValidator } from 'src/app/shared/validators/ImageFileValidator';
import { StartDateValidator } from 'src/app/shared/validators/StartDateValidator';
import * as AuctionActions from 'src/app/store/actions/auction.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  auctionForm: FormGroup = this.fb.group({
    StartDateTime: ['', [Validators.required, StartDateValidator('EndDateTime')]],
    EndDateTime: ['', [Validators.required, EndDateValidator('StartDateTime')]],
    ProductName: ['', [Validators.required, Validators.maxLength(50)]],
    ProductDescription: ['', [Validators.required, Validators.maxLength(1000)]],
    BasePrice: ['', [Validators.required, Validators.min(1), Validators.max(10000000), Validators.pattern('^[0-9]*.[0-9]*?$')]],
    Image: ['', [Validators.required, imageFileValidator()]]
  });

  imageCount?: number;
  selectedFile?: File;
  minDate: Date = new Date();

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    // this.createForm()
  }

  ngOnInit(): void {
    // this.createForm();
  }




  // createForm() {
  //   this.auctionForm = this.fb.group({
  //     StartDateTime: ['', [Validators.required, StartDateValidator('EndDateTime')]],
  //     EndDateTime: ['', [Validators.required, EndDateValidator('StartDateTime')]],
  //     ProductName: ['', [Validators.required, Validators.maxLength(50)]],
  //     ProductDescription: ['', [Validators.required, Validators.maxLength(1000)]],
  //     BasePrice: ['', [Validators.required, Validators.min(1), Validators.max(10000000), Validators.pattern('^[0-9]*.[0-9]*?$')]],
  //     Image: ['', [Validators.required]]
  //   });
  // }

  onFileSelected($event: any) {
    const file = $event.target.files[0];
    this.auctionForm.get('Image')?.setValue(file.name);
    this.selectedFile = file;

  }


  onSubmit() {
    if (this.auctionForm.invalid) {
      return;
    }

    const fd = new FormData();
    fd.append('productName', this.auctionForm.controls['ProductName'].value);
    fd.append('startDate', this.auctionForm.controls['StartDateTime'].value.toISOString());
    fd.append('endDate', this.auctionForm.controls['EndDateTime'].value.toISOString());
    fd.append('basePrice', this.auctionForm.controls['BasePrice'].value);
    fd.append('productDescription', this.auctionForm.controls['ProductDescription'].value);
    fd.append('Image', this.selectedFile!, this.selectedFile?.name);

    this.store.dispatch(AuctionActions.addAuction({ fd }));

    this.auctionForm.reset();

  }

}
