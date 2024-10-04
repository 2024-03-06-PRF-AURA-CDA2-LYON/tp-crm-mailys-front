import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

export const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

