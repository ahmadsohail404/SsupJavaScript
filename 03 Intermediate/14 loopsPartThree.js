//NOTE: For of is majorly for array and for in is majorly for objects

const names = [
    "YouTube",
    "Facebook",
    "Google",
    "Amazon",
    "Netflix",
    "Amazon"
]
// for (const n of names) {
//     console.log(n);
// }

const symbols = {
    yt: "YouTube",
    ig: "Instagram",
    fb: "Facebook",
    twt: "Twitter"
}
// for (const n in symbols) {
//     console.log(n);           // it gives the keys
// }

// for (const n in symbols) {
//     console.log(symbols[n]);  // it gives the values
// }
for (const n in symbols) {
    console.log(`key is ${n} and value is ${symbols[n]}`);
}


