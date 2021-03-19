import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'; // api çağrısı, backend'deki dataya ulaşıyoruz.
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44306/api/products/getall"
  constructor(private HttpClient:HttpClient) { } // httpclienti kullanabilmek için enjekte ettik.

  getProducts():Observable<ProductResponseModel>{
    return this.HttpClient.get<ProductResponseModel>(this.apiUrl)
  }


}
