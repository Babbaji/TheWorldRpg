import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BossPageComponent } from './boss-page.component';

describe('BossPageComponent', () => {
  let component: BossPageComponent;
  let fixture: ComponentFixture<BossPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
