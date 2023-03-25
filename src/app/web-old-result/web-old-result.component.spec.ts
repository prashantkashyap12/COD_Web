import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebOldResultComponent } from './web-old-result.component';

describe('WebOldResultComponent', () => {
  let component: WebOldResultComponent;
  let fixture: ComponentFixture<WebOldResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebOldResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebOldResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
