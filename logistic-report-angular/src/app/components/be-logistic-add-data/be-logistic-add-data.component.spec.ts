import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeLogisticAddDataComponent } from './be-logistic-add-data.component';

describe('BeLogisticAddDataComponent', () => {
  let component: BeLogisticAddDataComponent;
  let fixture: ComponentFixture<BeLogisticAddDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeLogisticAddDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeLogisticAddDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
