import { Component } from '@angular/core';
import { EntriesInfoService } from '../add-words/entries-info.service';
import { Entry } from '../entry';

@Component({
  selector: 'app-my-vocabulary',
  templateUrl: './my-vocabulary.component.html',
  styleUrls: ['./my-vocabulary.component.scss']
})
export class MyVocabularyComponent {
  public entries: Entry[] = [];

  constructor(private entriesInfoService: EntriesInfoService) {}

  ngOnInit(): void {
    this.entries = this.entriesInfoService.entries;
  }
}
