import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinBoardComponent } from './bulletin-board.component';

describe('BulletinBoardComponent', () => {
  let component: BulletinBoardComponent;
  let fixture: ComponentFixture<BulletinBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletinBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletinBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
