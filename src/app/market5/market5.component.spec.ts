import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Market5Component } from './market5.component';

describe('Market5Component', () => {
  let component: Market5Component;
  let fixture: ComponentFixture<Market5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Market5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Market5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
