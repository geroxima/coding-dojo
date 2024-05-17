Number.prototype.isPrime = function() {
    if (this <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
};

const { performance } = require('perf_hooks');

function findPrime(target) {
    const start = performance.now();
    let primeCount = 0;
    let num = 2;
    while(primeCount < target) {
        if(num.isPrime()) {
            primeCount++;
        }
        num++;
    }
    console.log(`The ${target.toLocaleString()}th prime number is ${num-1}`);
    console.log(`This took ${(performance.now() - start).toFixed(2)} milliseconds to run`);
}

// Calcular el primo número 100,000
findPrime(1e5);

// Calcular el primo número 1,000,000
findPrime(1e6);
