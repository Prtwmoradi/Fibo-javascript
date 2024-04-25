// Recursive
function powerOfThree(n) {
    if (n === 0) {
        return 1;
    } else {
        return 3 * powerOfThree(n - 1);
    }
}

// Iterative
function powerOfThreeIterative(n) {
    let power = 1;
    for (let i = 0; i < n; i++) {
        power *= 3;
    }
    
    return power;
}

console.time("Recursive");
const recursiveResult = powerOfThree(10); 
console.log("Recursive Result:", recursiveResult);
console.timeEnd("Recursive");

console.time("Iterative");
const iterativeResult = powerOfThreeIterative(10);
console.log("Iterative Result:", iterativeResult);
console.timeEnd("Iterative");


function powerOffour(n) {
    if (n === 0) {
        return 1;
    } else {
        return 4 * powerOffour(n - 1);
    }
}
try {
    const result = powerOffour(10000);
    console.log("Result:", result);
} catch (error) {
    console.error("Error:", error.message);
}