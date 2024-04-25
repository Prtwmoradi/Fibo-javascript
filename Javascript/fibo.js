
const fib = (n, memo ={})=>{
    if (n in memo) return memo [n];
    if (n<=2) return 1;
    memo[n] = fib(n - 1,memo)+fib(n - 2,memo);
    return  memo[n]
};

console.time("Recursive");
console.log(fib(30))
console.log(fib(50))
console.timeEnd("Recursive");

const fib2 = (n)=>{
    if (n<=2) return 1;
    return fib2(n - 1 )+fib2(n - 2 );
};
console.time("Recursive");
console.log(fib2(30))
console.log(fib2(50))
console.timeEnd("Recursive");
