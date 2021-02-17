import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutSidebarComponent } from './default-layout-sidebar.component';

describe('DefaultLayoutSidebarComponent', () => {
  let component: DefaultLayoutSidebarComponent;
  let fixture: ComponentFixture<DefaultLayoutSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultLayoutSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
