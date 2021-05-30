import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainButtonFormComponent } from './main-button-form.component';

describe('MainButtonFormComponent', () => {
  let component: MainButtonFormComponent;
  let fixture: ComponentFixture<MainButtonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainButtonFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainButtonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
