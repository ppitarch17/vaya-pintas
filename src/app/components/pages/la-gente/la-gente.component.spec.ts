import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaGenteComponent } from './la-gente.component';

describe('LaGenteComponent', () => {
  let component: LaGenteComponent;
  let fixture: ComponentFixture<LaGenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaGenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaGenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
