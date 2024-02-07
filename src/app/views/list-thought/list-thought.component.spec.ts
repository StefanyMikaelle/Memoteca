import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThoughtComponent } from './list-thought.component';

describe('ListThoughtComponent', () => {
  let component: ListThoughtComponent;
  let fixture: ComponentFixture<ListThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListThoughtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
