import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSaintComponent } from './info-saint.component';

describe('InfoSaintComponent', () => {
  let component: InfoSaintComponent;
  let fixture: ComponentFixture<InfoSaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
