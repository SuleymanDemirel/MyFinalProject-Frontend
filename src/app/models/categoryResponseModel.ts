import { Category } from "./category";
import { ResponseModel } from "./ResponseModel";

export interface CategoryResponseModel extends ResponseModel{
    data:Category[];
}