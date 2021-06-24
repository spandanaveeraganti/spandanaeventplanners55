import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoorparatemeetingsComponent } from './coorparatemeetings.component';

describe('CoorparatemeetingsComponent', () => {
  let component: CoorparatemeetingsComponent;
  let fixture: ComponentFixture<CoorparatemeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoorparatemeetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoorparatemeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
