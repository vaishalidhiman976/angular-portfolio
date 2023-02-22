import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VNavbarComponent } from './v-navbar.component';

describe('VNavbarComponent', () => {
  let component: VNavbarComponent;
  let fixture: ComponentFixture<VNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
