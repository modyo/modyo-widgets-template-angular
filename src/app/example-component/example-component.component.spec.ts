import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCommponentComponent } from './example-commponent.component';

describe('ExampleCommponentComponent', () => {
  let component: ExampleCommponentComponent;
  let fixture: ComponentFixture<ExampleCommponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleCommponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCommponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
