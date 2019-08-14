import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SundayReadingComponent } from './sunday-reading.component';

describe('SundayReadingComponent', () => {
  let component: SundayReadingComponent;
  let fixture: ComponentFixture<SundayReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SundayReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SundayReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
