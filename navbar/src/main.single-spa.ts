
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular<MyProps>({
  bootstrapFunction: singleSpaProps => {
    console.log(singleSpaProps);

    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic([...getSingleSpaExtraProviders(), { provide: 'navs', useValue: singleSpaProps.navs }]).bootstrapModule(AppModule);
  },
  template: '<navbar-root />',
  Router,
  NgZone: NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

type MyProps = {
  navs: string
}