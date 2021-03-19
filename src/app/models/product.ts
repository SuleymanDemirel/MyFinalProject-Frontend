export interface Product{  // export = public. objemizde nelerin olması gerektiğini verdik.
    productId:number;
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice:number;
}