import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Customer } from '../Customer.type';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
  this.userForm = this.fb.group(Customer);
//   customerForm = new FormGroup({
//     company_name : new FormControl(''),
//     first_name: new FormControl(''),
//     last_name: new FormControl(''),
//     email: new FormControl(''),
//     phone_number: new FormControl(''),
//     address: new FormControl(''),
//     zip_code: new FormControl(''),
//     country:new FormControl(''),
//     city: new FormControl(''),
//     state: new FormControl(''),
//     orders: new FormControl([]),
// })

  constructor(private customerService:CustomerService){}

  onSubmit(){
    this.customerService.add(this.customerForm)
  }
}
