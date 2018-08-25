import {LandingPageComponent} from './landing-page.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let routerMock: Router;

  beforeEach(() => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, BrowserAnimationsModule],
      declarations: [LandingPageComponent],
      providers: [
        {provide: Router, useValue: routerMock}
      ]
    });

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
  });

  it('should navigate to the next route when clicking enter or on the button', () => {
    fixture.detectChanges();
    component.startExploreOrgs();
    expect(routerMock.navigate).toHaveBeenCalled();
  });
});
