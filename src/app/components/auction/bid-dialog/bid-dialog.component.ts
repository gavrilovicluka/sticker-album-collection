import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bid-dialog',
  templateUrl: './bid-dialog.component.html',
  styleUrls: ['./bid-dialog.component.scss']
})
export class BidDialogComponent {

  public givenValue?:number;
  
  constructor(public dialogRef: MatDialogRef<BidDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.givenValue = this.data.price;
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
