import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftMonitorComponent } from './shift-monitor.component';

describe('ShiftMonitorComponent', () => {
  let component: ShiftMonitorComponent;
  let fixture: ComponentFixture<ShiftMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
