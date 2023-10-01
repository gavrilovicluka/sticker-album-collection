import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Bid } from 'src/app/models/bid';
import { EndDateValidator } from 'src/app/shared/validators/EndDateValidator';
import { StartDateValidator } from 'src/app/shared/validators/StartDateValidator';
import * as BidActions from 'src/app/store/actions/bid.actions';
import { AppState } from 'src/app/store/app.state';
import { selectUserBids, selectWonBids } from 'src/app/store/selectors/bid.selector';

@Component({
  selector: 'app-user-bids',
  templateUrl: './user-bids.component.html',
  styleUrls: ['./user-bids.component.scss']
})
export class UserBidsComponent implements OnInit {

  selectedTabIndex: number = 0;
  startDate: Date;
  endDate: Date;
  userBids$: Observable<Bid[]> = of([]);
  wonBids$: Observable<Bid[]> = of([]);

  filterForm: FormGroup = this.fb.group({
    StartDateTime: ['', [Validators.required, StartDateValidator('EndDateTime')]],
    EndDateTime: ['', [Validators.required, EndDateValidator('StartDateTime')]]
  });

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    const today = new Date();

    this.startDate = new Date();
    this.startDate.setDate(today.getDate() - 3);

    this.endDate = new Date();
    this.endDate.setDate(today.getDate() + 4);
  }

  ngOnInit(): void {
    this.store.dispatch(BidActions.getUserBids({
      startDate: this.startDate.toISOString(),
      endDate: this.endDate.toISOString()
    }));

    this.userBids$ = this.store.select(selectUserBids)  //.subscribe(x => console.log(x))
    this.wonBids$ = this.store.select(selectWonBids)  //.subscribe(x => console.log(x))
  }


  filterData() {
    if (this.filterForm.invalid) {
      return;
    }

    const startDate = this.filterForm.controls['StartDateTime'].value.toISOString();
    const endDate = this.filterForm.controls['EndDateTime'].value.toISOString();

    this.store.dispatch(BidActions.getUserBids({
      startDate: startDate,
      endDate: endDate
    }))
  }


}
