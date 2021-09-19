import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMediaComponent } from './one-media.component';

describe('OneMediaComponent', () => {
  let component: OneMediaComponent;
  let fixture: ComponentFixture<OneMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
