import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSkillComponent } from './test-skill.component';

describe('TestSkillComponent', () => {
  let component: TestSkillComponent;
  let fixture: ComponentFixture<TestSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
