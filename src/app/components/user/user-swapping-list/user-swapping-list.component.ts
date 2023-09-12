import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/store/app.state';
import { ModalService } from '../../auth/modal.service';

@Component({
  selector: 'app-user-swapping-list',
  templateUrl: './user-swapping-list.component.html',
  styleUrls: ['./user-swapping-list.component.scss']
})
export class UserSwappingListComponent implements OnInit {
  
  otherUsers$: Observable<User[]> = of([]);
  albumId: number | null = null;

  constructor(private store: Store<AppState>, private modalService: ModalService) {
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openModal() {
    this.modalService.openModalSwapContact();
  }

}
