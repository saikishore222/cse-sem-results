import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsestudentsComponent } from './csestudents.component';

describe('CsestudentsComponent', () => {
  let component: CsestudentsComponent;
  let fixture: ComponentFixture<CsestudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsestudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsestudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
