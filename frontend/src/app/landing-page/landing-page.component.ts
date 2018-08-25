import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-landing-page',
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
  public inputOrg = '';
  public inputNotValid = false;

  constructor(private router: Router) {

  }

  onKey(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.startExploreOrgs();
    }
  }

  startExploreOrgs() {
    if (this.inputOrg) {
      this.router.navigate(['/results']);
    } else {
      this.inputNotValid = true;
    }
  }
}
