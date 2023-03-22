import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVocabularyComponent } from './my-vocabulary.component';

describe('MyVocabularyComponent', () => {
  let component: MyVocabularyComponent;
  let fixture: ComponentFixture<MyVocabularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVocabularyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyVocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
