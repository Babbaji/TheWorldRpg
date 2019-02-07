import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BossDescriptionComponent } from './boss-description.component';

describe('BossDescriptionComponent', () => {
  let component: BossDescriptionComponent;
  let fixture: ComponentFixture<BossDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
