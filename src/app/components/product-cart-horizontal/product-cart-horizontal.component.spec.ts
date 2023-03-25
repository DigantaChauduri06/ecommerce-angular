import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartHorizontalComponent } from './product-cart-horizontal.component';

describe('ProductCartHorizontalComponent', () => {
  let component: ProductCartHorizontalComponent;
  let fixture: ComponentFixture<ProductCartHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCartHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCartHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
