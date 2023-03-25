import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Market6Component } from './market6.component';

describe('Market6Component', () => {
  let component: Market6Component;
  let fixture: ComponentFixture<Market6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Market6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Market6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
