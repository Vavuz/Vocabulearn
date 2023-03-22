import { Component } from '@angular/core';
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

  constructor(private wordsInfoService: WordsInfoService) {}

  ngOnInit(): void {
    this.wordsInfoService.words = this.words;
  }

  addWord(): void {
    console.log(this.words)
    console.log("hey");
    //this.id += 1;
    //var type = "ciao";
    //var name = document.getElementById("word-input");
    //var sentences = [document.getElementById("sentence-input")];
    //var word = {this.id, type, name, sentences};
    this.words.push({id: 3, type: "ciao", name: "miao", sentences: ["gao"]});
  }

  get words() {
    return this._words;
  }

  set words(words) {
    this._words = words;
  }
}
