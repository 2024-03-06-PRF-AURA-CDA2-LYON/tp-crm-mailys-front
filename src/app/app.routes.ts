import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AccueilComponent } from './accueil/accueil.component';

export const routes: Routes = [
  { path:'',component: AccueilComponent, pathMatch: 'full'},
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

