import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaResComponent } from './nueva-res.component';

describe('NuevaResComponent', () => {
  let component: NuevaResComponent;
  let fixture: ComponentFixture<NuevaResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
