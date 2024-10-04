import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Customer.type';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {
  customer$!: Observable<Customer> |null

  constructor(private customerService:CustomerService,private route: ActivatedRoute){}

  ngOnInit():void{
    this.customer$ = this.customerService.get(this.route.snapshot.paramMap.get('id'))
  }
}
