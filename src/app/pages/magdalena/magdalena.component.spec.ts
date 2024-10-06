import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagdalenaComponent } from './magdalena.component';

describe('MagdalenaComponent', () => {
  let component: MagdalenaComponent;
  let fixture: ComponentFixture<MagdalenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagdalenaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagdalenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
