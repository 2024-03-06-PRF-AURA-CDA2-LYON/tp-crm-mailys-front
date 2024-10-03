import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Customer.type';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{
  customers$!: Observable<Customer[]>

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers$=this.customerService.getList()
}

}
