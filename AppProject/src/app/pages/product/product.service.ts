import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  protected url: string = "http://localhost:3000/";

  getAllProducts(): Observable<ProductModel[]> {
    let productResponse = this.http.get<ProductModel[]>(`${this.url}Products`);
    return productResponse;
  }
}

export interface Rating {
  rate: number;
  count: number;
}

export interface ProductModel {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
