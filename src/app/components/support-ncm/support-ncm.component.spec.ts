import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportNcmComponent } from './support-ncm.component';

describe('SupportNcmComponent', () => {
  let component: SupportNcmComponent;
  let fixture: ComponentFixture<SupportNcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportNcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportNcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
