import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookCartComponent } from './components/book-cart/book-cart.component';
import { ProductListComponent } from './components/book-cart/product-list/product-list.component';
import { FiltersComponent } from './components/book-cart/filters/filters.component';

import { ProductItemComponent } from './components/book-cart/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import {BooksService} from './components/book-cart/product-list/product-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookCartComponent,
    ProductListComponent,
    FiltersComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
