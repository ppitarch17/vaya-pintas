import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCollaComponent } from './la-colla.component';

describe('LaCollaComponent', () => {
  let component: LaCollaComponent;
  let fixture: ComponentFixture<LaCollaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaCollaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaCollaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
