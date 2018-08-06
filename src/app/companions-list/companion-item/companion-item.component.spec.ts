import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionItemComponent } from './companion-item.component';

describe('CompanionItemComponent', () => {
  let component: CompanionItemComponent;
  let fixture: ComponentFixture<CompanionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
