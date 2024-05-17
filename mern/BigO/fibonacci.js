const { performance } = require('perf_hooks');

// Fibonacci - Recursivo
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}

let startRfib = performance.now();
rFib(20);
let endRfib = performance.now();
console.log(`rFib(20) took: ${endRfib - startRfib} ms`);

// Fibonacci - Iterativo
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}

let startIfib = performance.now();
iFib(20);
let endIfib = performance.now();
console.log(`iFib(20) took: ${endIfib - startIfib} ms`);
