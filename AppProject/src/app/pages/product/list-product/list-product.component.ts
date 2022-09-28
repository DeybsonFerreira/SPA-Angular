import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProductModel, ProductService } from "../product.service";

@Component({
  selector: "app-list-product",
  templateUrl: "./list-product.component.html",
  styleUrls: ["./list-product.component.css"],
})
export class ListProductComponent implements OnInit {
  constructor(private service: ProductService) {}

  //test
  testObservable(): Observable<string> {
    return new Observable((subscriber) => {
      subscriber.next("Olá");
      subscriber.next("olá 1");
      subscriber.next("olá 2");
      subscriber.next("olá 3");
    //   subscriber.unsubscribe(); // cancelar subscription
      subscriber.complete();
      console.log("FIM");
    });
  }

  public allProduct: ProductModel[] = [];
  ngOnInit() {
    this.service.getAllProducts().subscribe({
      next: (res) => {
        this.allProduct = res;
        console.log(this.allProduct);
      },
      error: (error) => {
        console.log("error here:", error);
      },
      complete() {
        console.log("completed");
      },
    });
  }
}
