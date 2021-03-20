import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'; // api çağrısı, backend'deki dataya ulaşıyoruz.
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44306/api/";
  constructor(private HttpClient:HttpClient) { } // httpclienti kullanabilmek için enjekte ettik.

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getall";
    return this.HttpClient.get<ListResponseModel<Product>>(newPath)
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.HttpClient.get<ListResponseModel<Product>>(newPath)
  }

}
