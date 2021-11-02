import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<app-page-header
    title="Page Not Found"
    icon="bi bi-emoji-expressionless-fill"
    description="ERROR 404 PAGE NOT FOUND !"
  ></app-page-header>`,
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
