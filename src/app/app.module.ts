import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FamousDishesComponent } from './famous-dishes/famous-dishes.component';
import { FilterPipe } from './shared/filter.pipe';
import { NonvegComponent } from './nonveg/nonveg.component';
import { HeaderComponent } from './header/header.component';
import { SouthindianComponent } from './southindian/southindian.component';
import { VegComponent } from './veg/veg.component';
import { Nonveg1Component } from './nonveg1/nonveg1.component';
import { CartComponent } from './cart/cart.component';
import { NgifTestComponent } from './ngif-test/ngif-test.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    FamousDishesComponent,
    FilterPipe,
    NonvegComponent,
    HeaderComponent,
    SouthindianComponent,
    VegComponent,
    Nonveg1Component,
    CartComponent,
    NgifTestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
