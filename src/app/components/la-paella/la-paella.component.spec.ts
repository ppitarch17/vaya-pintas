import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaPaellaComponent } from './la-paella.component';

describe('LaPaellaComponent', () => {
  let component: LaPaellaComponent;
  let fixture: ComponentFixture<LaPaellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaPaellaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaPaellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
