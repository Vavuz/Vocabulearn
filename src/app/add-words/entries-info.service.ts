import { Injectable } from '@angular/core';
import { Entry } from '../entry';

@Injectable({
  providedIn: 'root'
})
export class EntriesInfoService {
  private _entries: Entry[] = [];

  constructor() { }

  add(entry: Entry): void {
    this._entries.push(entry);
  }

  get entries() {
    return this._entries;
  }

  set entries(entries) {
    this._entries = entries;
  }
}
