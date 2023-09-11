import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectIsLoggedIn } from 'src/app/store/selectors/auth.selectors';
import { selectUserId } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean | null = null;
  userId: number | null = null;

  constructor(private store: Store<AppState>, private router: Router) { }
  
  ngOnInit(): void {
    
    this.store.select(selectIsLoggedIn).subscribe((isLoggedIn) => this.isLoggedIn = isLoggedIn);
    this.store.select(selectUserId).subscribe((userId) => this.userId = userId);
  }

  onMyAlbumsClicked() {
    if(!this.isLoggedIn) {
      alert("Morate biti prijavljeni da biste videli albume.");
    } else {
      this.router.navigate([`${this.userId}/my-albums`])
    }
  }
}
