import { TestBed } from '@angular/core/testing';

import { ChangeCardsViewService } from './change-cards-view.service';

describe('ChangeViewService', () => {
  let service: ChangeCardsViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeCardsViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
