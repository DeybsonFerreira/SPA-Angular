import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { routesConfig } from "./app.routing";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductComponent } from "./pages/product/product.component";
import { ProductService } from "./pages/product/product.service";
import { ListProductComponent } from "./pages/product/list-product/list-product.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailComponent } from "./pages/product/product-detail/product-detail.component";

//locale
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { RegisterComponent } from "./pages/register/register.component";
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    ListProductComponent,
    ProductDetailComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, [RouterModule.forRoot(routesConfig, { useHash: false })], FormsModule, HttpClientModule],
  providers: [
    ProductService,
    {
      provide: LOCALE_ID,
      useValue: "pt",
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: "BRL",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
