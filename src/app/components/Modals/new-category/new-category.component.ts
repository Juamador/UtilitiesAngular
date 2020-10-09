import { Component, OnInit, Input } from '@angular/core';
import { Categories } from '../../../Models/Categories.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MyServicesService } from '../../../services/my-services.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  @Input() objModel: Categories;
  @Input() title: string;
  constructor(public activeModal: NgbActiveModal, private myServ: MyServicesService) { }

  ngOnInit() {
    if ( this.objModel == null ) {
        this.objModel = new Categories();
    }
  }

  public decline() {
    this.activeModal.close(false);
  }

  public Save() {
    this.myServ.AddCategory(this.objModel).subscribe(data => {
      this.activeModal.close(data > 0);
    });

  }
}
