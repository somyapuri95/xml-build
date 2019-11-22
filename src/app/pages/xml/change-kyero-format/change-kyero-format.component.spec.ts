import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeKyeroFormatComponent } from './change-kyero-format.component';

describe('ChangeKyeroFormatComponent', () => {
  let component: ChangeKyeroFormatComponent;
  let fixture: ComponentFixture<ChangeKyeroFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeKyeroFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeKyeroFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
