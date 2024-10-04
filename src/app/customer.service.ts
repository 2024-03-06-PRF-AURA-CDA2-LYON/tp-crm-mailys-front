import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from './Customer.type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl ="http://localhost:8006/customers"

  constructor(private http: HttpClient) { }

  getList(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.apiUrl+"/show");
  }

  get(id:string | null): Observable<Customer> | null{
    if(!id){
      return null;
    }
    return this.http.get<Customer>(`${this.apiUrl}/customer/${id}`);
  }

  add(customer: Customer):Observable<Customer>{
    return this.http.post<Customer>(this.apiUrl+"/save", customer);
  }

  update(id:string, customer:Customer):Observable<Customer>{
    return this.http.put<Customer>(`${this.apiUrl}/update/${id}`,customer);
  }

  delete(id:string):Observable<Customer>{
    console.log(`${this.apiUrl}/customer/delete/${id}`)
    return this.http.delete<Customer>(`${this.apiUrl}/customer/delete/${id}`);
  }
}
