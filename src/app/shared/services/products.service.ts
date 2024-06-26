import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product.Interface';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('api/products');
  }
  post(payload: ProductPayload) {
    return this.httpClient.post('api/products', payload);
  }
}
