import { Component } from '@angular/core';
import { EntriesInfoService } from '../add-words/entries-info.service';

@Component({
  selector: 'app-my-vocabulary',
  templateUrl: './my-vocabulary.component.html',
  styleUrls: ['./my-vocabulary.component.scss']
})
export class MyVocabularyComponent {
  public entries: {id: number,
    type: string,
    name: string,
    meaning: string,
    sentence: string}[] = [];

  constructor(private entriesInfoService: EntriesInfoService) {}

  ngOnInit(): void {
    this.entries = this.entriesInfoService.entries;
  }
}
