export class Entry {
    type: string;
    name: string;
    meaning: string;
    sentence: string;

    constructor(type: string, name: string, meaning: string, sentence: string) {
        this.type = type;
        this.name = name;
        this.meaning = meaning;
        this.sentence = sentence;
    }
}