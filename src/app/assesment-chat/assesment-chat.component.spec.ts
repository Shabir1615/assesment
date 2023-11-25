import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmentChatComponent } from './assesment-chat.component';

describe('AssesmentChatComponent', () => {
  let component: AssesmentChatComponent;
  let fixture: ComponentFixture<AssesmentChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssesmentChatComponent]
    });
    fixture = TestBed.createComponent(AssesmentChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
