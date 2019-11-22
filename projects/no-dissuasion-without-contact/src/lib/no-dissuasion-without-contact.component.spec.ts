import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDissuasionWithoutContactComponent } from './no-dissuasion-without-contact.component';

describe('NoDissuasionWithoutContactComponent', () => {
  let component: NoDissuasionWithoutContactComponent;
  let fixture: ComponentFixture<NoDissuasionWithoutContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoDissuasionWithoutContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDissuasionWithoutContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
