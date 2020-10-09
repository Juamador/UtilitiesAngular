import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../components/Modals/confirmation-modal/confirmation-modal.component';
import { Categories } from '../Models/Categories.model';
import { NewCategoryComponent } from '../components/Modals/new-category/new-category.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  public confirm(title: string,
                 message: string,
                 btnOkText: string,
                 btnCancelText: string,
                 dialogSize: 'sm'|'lg' | 'xl'| 'md' = 'sm'): Promise<boolean> {

  const modalRef = this.modalService.open(ConfirmationModalComponent);
  modalRef.componentInstance.title = title;
  modalRef.componentInstance.message = message;
  modalRef.componentInstance.btnOkText = btnOkText;
  modalRef.componentInstance.btnCancelText = btnCancelText;
  modalRef.componentInstance.size = dialogSize;
  modalRef.componentInstance.index = -1;
  return modalRef.result;
   }

   public SaveNewCategory(title: string,
                          dialogSize: 'sm'|'lg' | 'xl'| 'md' = 'sm',
                          category: Categories,
                          ): Promise<Categories> {

  const modalInstance = this.modalService.open(NewCategoryComponent);
  modalInstance.componentInstance.title = title;
  modalInstance.componentInstance.size = dialogSize;
  modalInstance.componentInstance.objModel = category;
  return modalInstance.result;
   }
}
