import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Person } from 'src/app/Models/Person.model';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../../Models/Categories.model';
import { environment } from '../../../environments/environment';

import { MyServicesService } from '../../services/my-services.service';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ObjPerson: Person;
  PersonList: Person[];
  CategoryList: Categories[];
  category: Categories;

  constructor(private catServes: MyServicesService, private myModal: ModalService) {

      }

  ngOnInit() {
    this.ObjPerson = new Person();
    this.PersonList = [];
    this.GetAllCateogories();
  }

  AddPerson() {
    this.PersonList.push(this.ObjPerson);
    this.ObjPerson = new Person();
    const a: any = $('#myModal');
    a.modal('hide');

  }

  GetAllCateogories() {
    this.catServes.GetAllCategories().subscribe((data: Categories[]) => {
      this.CategoryList = data;
    });
  }


  DeleteCategorie(item: Categories) {
    return this.myModal.confirm('Eliminar categoria', "Está seguro que desea eliminar esta categoria?", 'Yes', 'No', 'sm')
      .then(confirmed => {
        if (confirmed) {
          this.catServes.DeleteCategory(item).subscribe(data => {
            if (data > 0) {
              this.GetAllCateogories();
            }
          });
        } else {
          console.log("Operacion cancelada");
        }
      }).catch(error => {
        console.log(error);
      });
  }

  GetPartialNewCategory(item: Categories) {
    return this.myModal.SaveNewCategory('Nueva categoria', 'md', item)
      .then(confirmed => {
        this.GetAllCateogories();
      }).catch(error => {
        return console.log(error);
      });
  }
}
