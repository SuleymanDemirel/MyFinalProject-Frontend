
import { Product } from "./product";
import { ResponseModel } from "./ResponseModel";
// gelecek olan datayı karşılayacak model. 

export interface ProductResponseModel extends ResponseModel{ 

    data:Product[] // data, kendisi bir product arrayi olacak şekilde geliyor.
    
}