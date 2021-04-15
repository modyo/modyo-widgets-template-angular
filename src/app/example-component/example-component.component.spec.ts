import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponentComponent } from './example-component.component';

describe('ExampleComponentComponent', () => {
  let component: ExampleComponentComponent;
  let fixture: ComponentFixture<ExampleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponentComponent);
    component = fixture.componentInstance;
    component.post = {
      image: 'image',
      imageAlt: 'image Alt',
      description: 'description',
      id: 'id',
      title: 'title',
      slug: 'slug'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
