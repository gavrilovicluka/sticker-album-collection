import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { HeaderViewModel, selectHeaderViewModel } from 'src/app/store/selectors/header.selectors';
import { selectUserId } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerViewModel$: Observable<HeaderViewModel> = of();
  userId: number | null = null;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.headerViewModel$ = this.store.pipe(select(selectHeaderViewModel));
    this.store.select(selectUserId).subscribe((userId) => this.userId = userId);
  }

  onMyAlbumsClick(isLoggedIn: boolean) {
    if(!isLoggedIn) {
      alert("Morate biti prijavljeni da biste videli albume.");
    } else {
      this.router.navigate([`${this.userId}/my-albums`]);
    }
  }

}
