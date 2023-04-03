import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EntriesInfoService } from './entries-info.service';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.scss']
})
export class AddWordsComponent {
  private id: number = 0;
  public type = "noun-adjective";

  constructor(private entriesInfoService: EntriesInfoService, private snackBar: MatSnackBar) {}

  addWord(): void {
    let name = (<HTMLInputElement>document.getElementsByClassName("word-input")[0]).value;
    let meaning = (<HTMLInputElement>document.getElementsByClassName("meaning-input")[0]).value;
    let sentence = (<HTMLInputElement>document.getElementsByClassName("sentence-input")[0]).value;

    if (this.sentencesCheck(name, sentence)) {
      this.id += 1;
      let entry = {id: this.id, type: this.type, name: name, meaning: meaning, sentence: sentence}    //.replace(name, "____")
      this.entriesInfoService.entries.push(entry);
      this.openSnackBar("Word added to your personal dictionary!", "Close");
    } else
      this.openSnackBar("Your sentence must contain the word you wrote!", "Close")
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
}
