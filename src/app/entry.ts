class Entry {
    id: number;
    type: string;
    name: string;
    meaning: string;
    sentence: string;

    constructor(id: number, type: string, name: string, meaning: string, sentence: string) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.meaning = meaning;
        this.sentence = sentence;
    }
}