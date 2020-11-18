import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHigherComponent } from './map-higher.component';

describe('MapHigherComponent', () => {
  let component: MapHigherComponent;
  let fixture: ComponentFixture<MapHigherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapHigherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapHigherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
