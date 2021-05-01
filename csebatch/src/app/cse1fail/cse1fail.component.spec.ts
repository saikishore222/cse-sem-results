import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cse1failComponent } from './cse1fail.component';

describe('Cse1failComponent', () => {
  let component: Cse1failComponent;
  let fixture: ComponentFixture<Cse1failComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cse1failComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cse1failComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
