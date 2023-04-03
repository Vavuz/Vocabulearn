import { HttpClient } from '@angular/common/http';
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

  add(entry: {id: number, type: string, name: string, meaning: string, sentence: string}): void {
    this._entries.push(entry);
  }

  get entries() {
    return this._entries;
  }

  set entries(entries) {
    this._entries = entries;
  }
}
