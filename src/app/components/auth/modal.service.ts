import { Injectable, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegistrationModalComponent } from './registration-modal/registration-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalRefLogin?: BsModalRef | null;
  modalRefRegister?: BsModalRef;

  config = {
    backdrop: true,
    class: 'modal-lg',
  }


  constructor(private modalService: BsModalService) { }

  openModalLogin() {
    this.modalRefLogin = this.modalService.show(LoginModalComponent, { id: 1, class: 'modal-lg' });
  }

  openModalRegister() {
    this.modalRefRegister = this.modalService.show(RegistrationModalComponent, {id: 2, class: 'modal-lg' });
  }

  closeModal(modalId?: number){
    this.modalService.hide(modalId);
  }
}