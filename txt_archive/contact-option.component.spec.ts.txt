import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOptionComponent } from './contact-option.component';

describe('ContactOptionComponent', () => {
  let component: ContactOptionComponent;
  let fixture: ComponentFixture<ContactOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
