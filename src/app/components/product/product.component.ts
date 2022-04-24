import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = [
    {ref:"R001",label:"Product1",price:1000,qte:10},
    {ref:"R002",label:"Product2",price:2000,qte:20},
    {ref:"R003",label:"Product3",price:3000,qte:30}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
