import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BossCardComponent } from './boss-card.component';

describe('BossCardComponent', () => {
  let component: BossCardComponent;
  let fixture: ComponentFixture<BossCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
