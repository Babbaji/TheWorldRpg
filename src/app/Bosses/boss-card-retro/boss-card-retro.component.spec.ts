import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BossCardRetroComponent } from './boss-card-retro.component';

describe('BossCardRetroComponent', () => {
  let component: BossCardRetroComponent;
  let fixture: ComponentFixture<BossCardRetroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossCardRetroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossCardRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
