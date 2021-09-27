import {TestBed} from "@angular/core/testing";
import {NavigationEnd, Router} from "@angular/router";
import {Location} from '@angular/common'
import {Subject} from "rxjs";
import {RouterTestingModule} from "@angular/router/testing";

import {NavigationService} from "./navigation.service";

let router: Router;
let location: Location;
let navigationService: NavigationService;

describe('nNavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    }).compileComponents()
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  })

  it('history should be 2 after routing two times', function () {
    navigationService = new NavigationService(router, location);
    (router.events as Subject<any>).next(new NavigationEnd(1, 'category/series', 'tt1688659'));
    (router.events as Subject<any>).next(new NavigationEnd(1, 'tt1688659', 'category/movies'));
    expect(navigationService['history'].length).toEqual(2, 'history is empty')
  });
});
