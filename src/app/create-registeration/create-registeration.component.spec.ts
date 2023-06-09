import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegisterationComponent } from './create-registeration.component';

describe('CreateRegisterationComponent', () => {
  let component: CreateRegisterationComponent;
  let fixture: ComponentFixture<CreateRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRegisterationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
