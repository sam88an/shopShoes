import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutNavbarComponent } from './default-layout-navbar.component';

describe('DefaultLayoutNavbarComponent', () => {
  let component: DefaultLayoutNavbarComponent;
  let fixture: ComponentFixture<DefaultLayoutNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultLayoutNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
