import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Venkatkadiveti248libComponent } from './venkatkadiveti248lib.component';

describe('Venkatkadiveti248libComponent', () => {
  let component: Venkatkadiveti248libComponent;
  let fixture: ComponentFixture<Venkatkadiveti248libComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Venkatkadiveti248libComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Venkatkadiveti248libComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
