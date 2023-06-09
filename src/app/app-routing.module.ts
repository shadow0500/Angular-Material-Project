import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegisterationComponent } from './create-registeration/create-registeration.component';
import { RegisterationListComponent } from './registeration-list/registeration-list.component';

const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'register',component:CreateRegisterationComponent},
  {path:'list',component:RegisterationListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
