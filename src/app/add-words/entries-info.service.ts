import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntriesInfoService {
  private _entries: {id: number,
                  type: string,
                  name: string,
                  meaning: string,
                  sentence: string}[] = [];

  constructor() { }

  get entries() {
    return this._entries;
  }

  set entries(entries) {
    this._entries = entries;
  }
}
