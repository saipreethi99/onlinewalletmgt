import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDebitComponent } from './update-debit.component';

describe('UpdateDebitComponent', () => {
  let component: UpdateDebitComponent;
  let fixture: ComponentFixture<UpdateDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
