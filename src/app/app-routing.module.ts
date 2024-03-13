import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

const routes: Routes = [
  {path:""   , redirectTo:'home' , pathMatch: 'full'},
  {path:"home" , component:HomeComponent},
  {path:"About", component:AboutComponent},
  {path:"portfolio" ,component:ProtfolioComponent},
  {path:"contact", component:ContactComponent},
  {path: "**"     , component:NotfoundpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
