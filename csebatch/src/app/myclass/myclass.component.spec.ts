import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyclassComponent } from './myclass.component';

describe('MyclassComponent', () => {
  let component: MyclassComponent;
  let fixture: ComponentFixture<MyclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
