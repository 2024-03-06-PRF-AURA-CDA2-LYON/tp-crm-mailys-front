export type Customer={
  id: number;
  company_name:string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  zip_code: string;
  country:string;
  city: string;
  state: number;
  orders: Order[];
}

type Order={
id: number
  service_type: string;
  tva: number
  nb_day: number
  total_exclude_tax: number
  state: number
  comment:string;
  customer: Customer;
}
