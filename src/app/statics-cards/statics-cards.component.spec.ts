import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsCardsComponent } from './statics-cards.component';

describe('StaticsCardsComponent', () => {
  let component: StaticsCardsComponent;
  let fixture: ComponentFixture<StaticsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticsCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaticsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
