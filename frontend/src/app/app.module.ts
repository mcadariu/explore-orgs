import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ResultsModule} from './results/results.module';
import {LandingPageModule} from './landing-page/landing-page.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '../../node_modules/@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ResultsModule,
    LandingPageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
