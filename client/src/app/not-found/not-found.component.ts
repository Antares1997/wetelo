import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  private notFound = require("../assets/notfound.png");
  constructor() { }

  ngOnInit() {
  }

}
