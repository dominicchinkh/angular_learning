import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-payment',
  templateUrl: './credit-card-payment.component.html',
  styleUrls: ['./credit-card-payment.component.css']
})
export class CreditCardPaymentComponent implements OnInit {
  name = '';
  number = '';
  type = '';
  expiry_month = '';
  expiry_year = '';
  cvv = ''
  is_agree = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("Credit card details submited");
  }
}
