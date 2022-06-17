import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

import { ContactComponent } from './contact/contact.component';
import { FamousDishesComponent } from './famous-dishes/famous-dishes.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Nonveg1Component } from './nonveg1/nonveg1.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { SouthindianComponent } from './southindian/southindian.component';
import { VegComponent } from './veg/veg.component';

const routes: Routes = [
  {path:'',redirectTo:'famous-dishes',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'footer',component:FooterComponent},
  {path:'famous-dishes',component:FamousDishesComponent},
  {path:'search',component:SearchComponent},
  {path:'veg',component:VegComponent},
  {path:'southindian',component:SouthindianComponent},
  {path:'nonveg1',component:Nonveg1Component},
  {path:'cart',component:CartComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
