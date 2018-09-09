import {NgModule} from '@angular/core';
import {ResultsComponent} from './results.component';
import {ResultsService} from './results.service';

@NgModule({
  declarations: [
    ResultsComponent
  ],
  providers: [
    ResultsService
  ]
})
export class ResultsModule {
}
