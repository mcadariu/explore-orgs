import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('fade-in', [
      transition(':enter', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ]),
    ])
  ]
})
export class LandingPageComponent {
  private inputOrg: string = '';

  constructor(private router: Router) {

  }

  onKey(event: KeyboardEvent) {
    if (event.keyCode == 13) {
      this.startExploreOrgs();
    }
  }

  startExploreOrgs() {
    this.router.navigate(['/results']);
  }
}
