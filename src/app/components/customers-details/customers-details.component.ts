import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css'],
})
export class CustomersDetailsComponent implements OnInit {
  customer$: Observable<Customer>;

  constructor(
    activatedRouteService: ActivatedRoute,
    customersService: CustomersService
  ) {
    this.customer$ = activatedRouteService.params.pipe(
      switchMap((param) => customersService.getById(param.id))
    );
  }

  ngOnInit(): void {}
}
