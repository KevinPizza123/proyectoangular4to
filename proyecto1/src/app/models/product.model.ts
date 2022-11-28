import { CategoryModel } from "./category.model";


interface ProductModel{
id : number; // string o number 
name : string ; 
price : number ; 
description : string ;
category : CategoryModel;
}