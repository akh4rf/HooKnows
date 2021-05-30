import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipCardModalComponent } from './flip-card-modal.component';

describe('FlipCardModalComponent', () => {
  let component: FlipCardModalComponent;
  let fixture: ComponentFixture<FlipCardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipCardModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
