import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
productItemDetails
  constructor(private route: ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
      this.route.params.subscribe((params:Params)=>{
          console.log(+params['id'])
          this.productItemDetails = this.productService.getItem(+params['id'])
      })
  }

}
