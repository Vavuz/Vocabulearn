import { Component } from '@angular/core';
import { WordsInfoService } from '../add-words/words-info.service';

@Component({
  selector: 'app-my-vocabulary',
  templateUrl: './my-vocabulary.component.html',
  styleUrls: ['./my-vocabulary.component.scss']
})
export class MyVocabularyComponent {
  public words: {id: number,
    type: string,
    name: string,
    sentences: string[]}[] = [];

  constructor(private wordsInfoService: WordsInfoService) {}

  ngOnInit(): void {
    this.words = this.wordsInfoService.words;
    console.log("Ecco qua bro: ", this.words)
  }
}
