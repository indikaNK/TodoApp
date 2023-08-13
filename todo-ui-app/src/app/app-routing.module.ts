import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

//here i am creating the routers , router outlet tag will render these to the app component
const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  } ,
    //redirect to root if path has wildcard
  {
    path:'**',
    pathMatch:"full",
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
