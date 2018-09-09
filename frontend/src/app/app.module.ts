import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ResultsModule} from './results/results.module';
import {LandingPageModule} from './landing-page/landing-page.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '../../node_modules/@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LandingPageModule,
    ResultsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
