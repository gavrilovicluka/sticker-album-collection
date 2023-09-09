import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { HeaderViewModel, selectHeaderViewModel } from 'src/app/store/selectors/header.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerViewModel$: Observable<HeaderViewModel> = of();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.headerViewModel$ = this.store.pipe(select(selectHeaderViewModel));
  }


}
