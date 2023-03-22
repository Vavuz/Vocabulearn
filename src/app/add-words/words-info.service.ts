import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsInfoService {
  public words: {id: number,
                  type: string,
                  name: string,
                  sentences: string[]}[] = [];

  constructor() { }
}
