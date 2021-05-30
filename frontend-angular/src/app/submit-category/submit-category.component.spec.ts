import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCategoryComponent } from './submit-category.component';

describe('SubmitCategoryComponent', () => {
  let component: SubmitCategoryComponent;
  let fixture: ComponentFixture<SubmitCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
