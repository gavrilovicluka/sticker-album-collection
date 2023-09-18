import { Component, Input } from '@angular/core';
import { SwappingInfo } from 'src/app/models/swapping-info';
import { ModalService } from '../../auth/modal.service';

@Component({
  selector: 'app-swap-info',
  templateUrl: './swap-info.component.html',
  styleUrls: ['./swap-info.component.scss']
})
export class SwapInfoComponent {

  @Input() swappingInfo?: SwappingInfo;

  constructor(private modalService: ModalService) { }

  openModal() {
    if(this.swappingInfo) {
      this.modalService.openModalSwapContact(this.swappingInfo.userId);
    }
  }

}
