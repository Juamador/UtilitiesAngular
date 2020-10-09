import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Categories } from '../Models/Categories.model';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  constructor(private Client: HttpClient) { }

  GetAllCategories() {
    return this.Client.get(`${environment.ApiUrl}/categories`);
  }

  DeleteCategory(item: Categories) {
    return this.Client.post(`${environment.ApiUrl}/categories/delete`, item);
  }

  AddCategory(item: Categories) {
    return this.Client.post(`${environment.ApiUrl}/categories/add/`, item);
  }


}
