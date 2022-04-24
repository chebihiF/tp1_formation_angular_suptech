import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = []

  constructor() { }

  ngOnInit(): void {
    
  }

  loadProducts(){
    this.products = [
      {id:1,label:"Product1",price:1000,qte:10},
      {id:2,label:"Product2",price:2000,qte:20},
      {id:3,label:"Product3",price:3000,qte:30}
    ]
  }

  onAdd(){
    this.products.push({id:4,label:"Product4",price:4000,qte:10})
  }

  onRemove(product:Product){
    let index = this.products.indexOf(product);
    this.products.splice(index,1); 
  }

  trackProduct(index:any, product:any){
    console.log(product);
    return product ? product.id : undefined;
  }

}
