import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDuhansComponent } from './footer-duhans.component';

describe('FooterDuhansComponent', () => {
  let component: FooterDuhansComponent;
  let fixture: ComponentFixture<FooterDuhansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterDuhansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterDuhansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
