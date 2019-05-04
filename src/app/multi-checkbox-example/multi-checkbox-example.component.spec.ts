import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCheckboxExampleComponent } from './multi-checkbox-example.component';

describe('MultiCheckboxExampleComponent', () => {
  let component: MultiCheckboxExampleComponent;
  let fixture: ComponentFixture<MultiCheckboxExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiCheckboxExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCheckboxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
