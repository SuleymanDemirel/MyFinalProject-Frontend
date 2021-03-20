import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'; // api çağrısı, backend'deki dataya ulaşıyoruz.
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44306/api/categories/getall"
  constructor(private HttpClient:HttpClient) { } // httpclienti kullanabilmek için enjekte ettik.

  getCategories():Observable<ListResponseModel<Category>>{
    return this.HttpClient.get<ListResponseModel<Category>>(this.apiUrl)
  }


}
