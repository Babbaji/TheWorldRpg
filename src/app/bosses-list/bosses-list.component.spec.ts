import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BossesListComponent } from './bosses-list.component';

describe('BossesListComponent', () => {
  let component: BossesListComponent;
  let fixture: ComponentFixture<BossesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
