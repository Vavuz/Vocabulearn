import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWordsComponent } from './add-words/add-words.component';
import { HomeComponent } from './home/home.component';
import { MyVocabularyComponent } from './my-vocabulary/my-vocabulary.component';
import { TestSkillComponent } from './test-skill/test-skill.component';

const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "Add-words", component: AddWordsComponent },
  { path: "My-vocabulary", component: MyVocabularyComponent },
  { path: "Test-skill", component: TestSkillComponent },
  { path: "", redirectTo: "Home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
