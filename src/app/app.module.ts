import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { MatButtonModule} from '@angular/material/button';
import { AddWordsComponent } from './add-words/add-words.component';
import { TestSkillComponent } from './test-skill/test-skill.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MyVocabularyComponent } from './my-vocabulary/my-vocabulary.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddWordsComponent,
    TestSkillComponent,
    MyVocabularyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    FormsModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
