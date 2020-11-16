import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DootComponent } from './doot.component';

describe('DootComponent', () => {
  let component: DootComponent;
  let fixture: ComponentFixture<DootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
