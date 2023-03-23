import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsInfoService {
  private _words: {id: number,
                  type: string,
                  name: string,
                  sentences: string[]}[] = [];

  constructor() { }

  get words() {
    return this._words;
  }

  set words(words) {
    this._words = words;
  }
}
