import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsestudentsComponent } from './csestudents/csestudents.component';
import { TopperComponent } from './topper/topper.component';
import { MyclassComponent } from './myclass/myclass.component';
import { Cse1failComponent } from './cse1fail/cse1fail.component';
const routes: Routes = [
  {path:'csestudents',component:CsestudentsComponent},
  {path:'topperofthecse',component:TopperComponent},
  {path:'myclassresults',component:MyclassComponent},
  {path:'cse1fail',component:Cse1failComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
