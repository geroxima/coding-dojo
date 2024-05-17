const { performance } = require('perf_hooks');

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
 
let reversed1Start = performance.now();
const reversed1 = story.split("").reverse().join("");
let reversed1End = performance.now(); // Corrected "performace" to "performance"
console.log(`reversed1 took: ${reversed1End - reversed1Start} ms`)

let reversed2Start = performance.now();
const reversed2 = reverseString(story);
let reversed2End = performance.now(); // Corrected "performace" to "performance"
console.log(`reversed2 took: ${reversed2End - reversed2Start} ms`)
