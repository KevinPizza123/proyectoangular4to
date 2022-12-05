import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
import {HttpClient} from '@angular/common/http';

>>>>>>> ec4815f418f49e37c59df944d6aa57ccdeb1bc86

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
<<<<<<< HEAD
//ngoninit se ejecuta luego del constructor
export class ProductComponent implements OnInit {
  //httpclient es una clase hacer las peticiones
  constructor(private httpClient: HttpClient) {}//Inyeccion de dependencia

  ngOnInit(): void {
    this.getProduct();
    //this.getProducts();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }
  getProducts() {
   this.httpClient
      .get('https://api.escuelajs.co/api/v1/products').subscribe(
        response => {                    //funcion flecha o landa
        console.log(response);
      });
  }
//subscribe lista de espera va llegar la respuesta
//Observable trae la informacion
  getProduct() {
    this.httpClient
      .get('https://api.escuelajs.co/api/v1/products/20')
      .subscribe(response => {
        console.log(response);
      });
  }
  createProduct() {
    const data = {
      title:'esfero',
      price: 45,
      description: 'utiles escolares',
      category: 1,
      images: ['https://api.lorem.space/image/shoes?w=640&h=480&r=8318'],
    };
    const url = 'https://api.escuelajs.co/api/v1/products';
    this.httpClient.post(url, data).subscribe(
      response => {
      console.log(response);
    });
  }

  updateProduct() {
    const data = {
      title: 'lapiz',
      price: 60,
      description: 'calzado-Kevin Sani',
      category: 2,
      images: ['https://api.lorem.space/image/shoes?w=640&h=480&r=8318'],
    };
    const url = 'https://api.escuelajs.co/api/v1/products/201';

    this.httpClient.put(url, data).subscribe(
      response => {
      console.log(response);
    });

  }
  deleteProduct(){
    const url = 'https://api.escuelajs.co/api/v1/products/202';

    this.httpClient.delete(url).subscribe(
      response => {
      console.log(response);
    }
    );

=======
//oninit se ejecuta luego del constructor
export class ProductComponent implements OnInit  {
//httpclient hacer las peticiones
  constructor(private httpClient:HttpClient) { 
    this.httpClient.get("https://api.escuelajs.co/api/v1/products")
>>>>>>> ec4815f418f49e37c59df944d6aa57ccdeb1bc86
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    const responce = this.httpClient.get("https://api.escuelajs.co/api/v1/products")
    console.log(responce)
  }

  getProduct(){
    const responce = this.httpClient.get("https://api.escuelajs.co/api/v1/products/9")
    console.log(responce)
  }
  
  createProduct(){

    const data = {
   name : 'esfero' ,
   price : 45 ,
    description : 'utiles escolares', 
    category : 1 ,
    images : ["https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.blogs.es%2F5d6007%2Fluffy-en-one-piece%2F1366_2000.jpeg&imgrefurl=https%3A%2F%2Fwww.espinof.com%2Fanime%2Fsiempre-he-odiado-esa-corriente-creador-one-piece-no-queria-manga-combates-serios-revela-improbable-inspiracion-para-gear-fifth-luffy&tbnid=-CBJAUNzqc1anM&vet=12ahUKEwj40IeY4dj7AhUohuAKHVgmDIcQMygDegUIARDmAQ..i&docid=5DinRZOAuiZr2M&w=1211&h=681&q=luffy&ved=2ahUKEwj40IeY4dj7AhUohuAKHVgmDIcQMygDegUIARDmAQ" ,
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.geekmi.news%2F__export%2F1619631525888%2Fsites%2Fdebate%2Fimg%2F2021%2F04%2F28%2Fluffy1.jpg_1103262657.jpg&imgrefurl=https%3A%2F%2Fwww.geekmi.news%2Fseries%2FOne-Piece-Estos-son-los-apodos-que-le-ha-puesto-Monkey-D.-Luffy-a-los-demas-personajes-20210428-0013.html&tbnid=pBQnLBCiEj-ApM&vet=12ahUKEwj40IeY4dj7AhUohuAKHVgmDIcQMygIegUIARDwAQ..i&docid=cXDFf0OveG2OzM&w=1200&h=675&q=luffy&ved=2ahUKEwj40IeY4dj7AhUohuAKHVgmDIcQMygIegUIARDwAQ"]

    }
   const url = "https://api.escuelajs.co/api/v1/product";
    this.httpClient.post(url , data).subscribe(
    response => {
    console.log(response);

  }
    );
    
    
  }

  updateProduct(){

    const data = {
   name : 'zapato' ,
   price : 30 ,
    description : 'calzado', 
    category : 2 ,
    images : ["https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.blogs.es%2F5d6007%2Fluffy-en-one-piece%2F1366_2000.jpeg&imgrefurl=https%3A%2F%2Fwww.espinof.com%2Fanime%2Fsiempre-he-odiado-esa-corriente-creador-one-piece-no-queria-manga-combates-serios-revela-improbable-inspiracion-para-gear-fifth-luffy&tbnid=-CBJAUNzqc1anM&vet=12ahUKEwj40IeY4dj7AhUohuAKHVgmDIcQMygDegUIARDmAQ..i&docid=5DinRZOAuiZr2M&w=1211&h=681&q=luffy&ved=2ahUKEwj40IeY4dj7AhUohuAKHVgmDIcQMygDegUIARDmAQ" ,
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.geekmi.news%2F__export%2F1619631525888%2Fsites%2Fdebate%2Fimg%2F2021%2F04%2F28%2Fluffy1.jpg_1103262657.jpg&imgrefurl=https%3A%2F%2Fwww.geekmi.news%2Fseries%2FOne-Piece-Estos-son-los-apodos-que-le-ha-puesto-Monkey-D.-Luffy-a-los-demas-personajes-20210428-0013.html&tbnid=pBQnLBCiEj-ApM&vet=12ahUKEwj40IeY4dj7AhUohuAKHVgmDIcQMygIegUIARDwAQ..i&docid=cXDFf0OveG2OzM&w=1200&h=675&q=luffy&ved=2ahUKEwj40IeY4dj7AhUohuAKHVgmDIcQMygIegUIARDwAQ"]

    }
   const url = "https://api.escuelajs.co/api/v1/product/203";
    this.httpClient.put(url , data).subscribe(
    response => {
    console.log(response);

  }
    );
    
    
  }


}

