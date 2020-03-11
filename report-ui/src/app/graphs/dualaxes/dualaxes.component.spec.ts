import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DualaxesComponent } from './dualaxes.component';

describe('DualaxesComponent', () => {
  let component: DualaxesComponent;
  let fixture: ComponentFixture<DualaxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualaxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
