export const files = {
    movies: [
        ["1", "The 400 Blows"],
        ["5000", "La Haine"],
        ["7500", "The Godfather"],
        ["10000", "The Godfather: Part II"]
    ],
    books: [],
}

type Files = { [key: string]: string[][] }
// type NodeType = "FILESCAN" | "SELECTION" | "PROJECTION"
export class FileScan implements Iterator<string[][]> {
    init: [string];
    nextNode: any;
    files: Files;
    index: 0;
    fileName: keyof Files;
    constructor(init: [string], files: any, nextNode: any) {
        this.init = init;
        this.nextNode = nextNode;
        this.files = files;
        this.index = 0;
        this.fileName = init[0];
    }
    next(): IteratorResult<string[][], any> {
        if(this.index < this.files[this.fileName].length) {
            // @ts-ignore
            return { done: false, value: this.files[this.fileName][this.index++] }
        }
        return { done: true, value: undefined }
    }
}

export class Selection implements Iterator<string[][]> {
    init: string[];
    nextNode: any;
    constructor(init: string[], nextNode: any) {
        this.init = init;
        this.nextNode = nextNode;
    }
    next(): IteratorResult<string[][], any> {
        const { done, value } = this.nextNode.next() 
        if(this.nextNode !== null && !done) {
            // do actual stuff -- this needs to be more complicated to actually handle operations
            // TODO fiddly parsing shit
            if(value[0] === "5000") {
                return { done: false, value }
            }
            
            return { done: false, value: [] }
        }
        return { done: true, value: undefined }
    }
}

export class Projection implements Iterator<string[][]> {
    init: string[];
    nextNode: any;
    constructor(init: string[], nextNode: any) {
        this.init = init;
        this.nextNode = nextNode;
    }
    next(): IteratorResult<string[][], any> {
        const { done, value } = this.nextNode.next() 

        if(this.nextNode !== null && !done) {
            // do actual stuff -- this needs to be more complicated to actually handle operations
            // TODO fiddly schema registration and parsing shit
            if (value.length > 0) {
                return { done: false, value: [value[0]] }
            }

            return { done: false, value: [] }
        }
        return { done: true, value: undefined }
    }
}

export function execute(queryPlan: Iterator<string[][]>): any {
    console.log("Running query executor...");
    let records: string[][] = [];
    let next = queryPlan.next();
    while(next && !next.done) {
        if (next.value.length > 0) {
            // @ts-ignore
            records.push(next.value);
        }
        next = queryPlan.next();
    }
    return records;
}