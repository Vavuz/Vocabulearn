import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WordsInfoService } from './words-info.service';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.scss']
})
export class AddWordsComponent {
  private _words: {id: number,
                type: string,
                name: string,
                sentences: string[]}[] = [];
  private id: number = 0;
  public type = "noun-adjective";

  constructor(private wordsInfoService: WordsInfoService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.wordsInfoService.words = this.words;
  }

  addWord(): void {
    let name = (<HTMLInputElement>document.getElementsByClassName("word-input")[0]).value;
    let sentences = (<HTMLInputElement>document.getElementsByClassName("sentence-input")[0]).value;

    if (this.sentencesCheck(name, sentences)) {
      this.id += 1;
      let word = {id: this.id, type: this.type, name: name, sentences: [sentences.replace(name, "____")]}
      this.words.push(word);
      this.openSnackBar("Word added to your personal dictionary!", "Close");
      console.log(this.words);    // Checking that the value is stored
    } else
      this.openSnackBar("Your sentence doesn't contain the word you wrote!", "Close")
  }

  sentencesCheck(word: string, sentence: string): boolean {
    if (sentence.toLowerCase().indexOf(word.toLowerCase()) !== -1)
      return true;
    return false;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3500
    });
  }

  get words() {
    return this._words;
  }

  set words(words) {
    this._words = words;
  }
}
