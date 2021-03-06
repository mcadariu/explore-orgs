import {Component} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {ResultsService} from './results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  animations: [
    trigger('fade-in', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class ResultsComponent {
  constructor(private resultsService: ResultsService) {}
}
