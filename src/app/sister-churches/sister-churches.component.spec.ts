import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisterChurchesComponent } from './sister-churches.component';

describe('SisterChurchesComponent', () => {
  let component: SisterChurchesComponent;
  let fixture: ComponentFixture<SisterChurchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisterChurchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SisterChurchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
