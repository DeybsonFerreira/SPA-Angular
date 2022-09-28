import { Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProductDetailComponent } from "./pages/product/product-detail/product-detail.component";
import { ProductComponent } from "./pages/product/product.component";
import { RegisterComponent } from "./pages/register/register.component";

export const routesConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "product", component: ProductComponent },
  { path: "product-detail/:id", component: ProductDetailComponent },
  { path: "register", component: RegisterComponent },
];
