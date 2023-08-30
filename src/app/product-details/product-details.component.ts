import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct:any={};
  constructor(
    private route: ActivatedRoute,
    private prodServ: ProductService
  ) {}

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.prodServ.getProductById(id).subscribe({
      next: (productData) => {
        this.selectedProduct=productData;
      },
    });
  }
}
