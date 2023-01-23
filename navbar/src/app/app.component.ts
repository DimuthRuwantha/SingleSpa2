import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';

@Component({
  selector: 'navbar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'navbar';

  singleSpaProps: SingleSpaProps = null;
  subscription: Subscription = null;
  ngOnInit() {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => this.singleSpaProps = props
    )
  }

  ngAfterViewInit() {
    console.log(this.singleSpaProps);

  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
