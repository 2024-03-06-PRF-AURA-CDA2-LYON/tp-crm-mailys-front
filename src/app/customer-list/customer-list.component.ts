import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Customer.type';
import { CustomerService } from '../customer.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [ CommonModule,RouterLink],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{
  customers$!: Observable<Customer[]>


  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers$=this.customerService.getList()
}
  deleteCustomer(id:number){
    console.log(id+"")
    return this.customerService.delete(id+"")
  }

}
