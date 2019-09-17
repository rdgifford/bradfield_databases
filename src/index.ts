import * as fs from "fs";

function main(): void {
    console.log("Running query executor...");
    fs.readFile("dummy.txt", (err: Error, data: Buffer) => {
        if (err) { throw err; }

        console.log("dummy.txt length:", data.length);
    });
}

main();