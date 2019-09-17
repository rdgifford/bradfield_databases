const files = {
    movies: [
        ["1", "The 400 Blows"],
        ["5000", "La Haine"],
        ["7500", "The Godfather"],
        ["10000", "The Godfather: Part II"]
    ],
    books: [],
}

const nodeMap = {
    "FILESCAN": ([fileName]: [string]) => {
        // @ts-ignore
        if(!files[fileName]) {
            throw new Error('Table does not exist')
        }
        // @ts-ignore
        return files[fileName][Symbol.iterator]()
    },
    "SELECTION": () => ({
        // @ts-ignore
        next: (...args) => {
            console.log('SELECTION',args)
            return { done: true }
        }
    }),
    "PROJECTION": () => ({
        next: () => {
            return {done: true};
        }
    })
}

type NodeType = "FILESCAN" | "SELECTION" | "PROJECTION"
export class PlanNode implements Iterable<any> {
    nodeType: NodeType;
    init: Array<string>
    nextPlanNode: PlanNode | null;
    constructor(nodeType: NodeType, init: Array<string>, nextPlanNode: PlanNode | null) {
        this.nodeType = nodeType;
        this.init = init;
        this.nextPlanNode = nextPlanNode;
    }
  
    [Symbol.iterator](): Iterator<any> {
        // @ts-ignore
        if(this.nextPlanNode !== null) {
            return this.nextPlanNode[Symbol.iterator]()

        }
        // @ts-ignore
        return nodeMap[this.nodeType](this.init)
    }

    close() {
    }
}

export function execute(queryPlan: Iterable<any>): any {
    console.log("Running query executor...");
    const records = []
    for(const record of queryPlan) {
        records.push(record)
    }
    return records
}