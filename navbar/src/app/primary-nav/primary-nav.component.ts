import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'navbar-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.css']
})
export class PrimaryNavComponent implements OnInit {

  @Input() myProp = "";
  constructor() { }

  ngOnInit() {
    console.log(this.myProp);
  }

}
