import { TestBed } from '@angular/core/testing';

import { MediaRepositoryService } from './media.repository.service';

describe('Media.RepositoryService', () => {
  let service: MediaRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
