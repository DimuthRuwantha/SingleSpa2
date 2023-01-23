import { Component, EventEmitter, Output } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navOpen = false;
  navTitle = "";

  @Output() toggle = new EventEmitter();

  constructor() {

  }

  toggleNav(): void {
    this.navOpen = !this.navOpen;
    this.toggle.emit();
  }
}
