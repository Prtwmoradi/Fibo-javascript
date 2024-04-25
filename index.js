/*
const fib = (n, memo ={})=>{
    if (n in memo) return memo [n];
    if (n<=2) return 1;
    memo[n] = fib(n - 1,memo)+fib(n - 2,memo);
    return  memo[n]
};

console.time();
console.log(fib(6))
console.log(fib(17))
console.log(fib(30))
console.log(fib(40))

console.timeEnd();
*/

const fib2 = (n)=>{
    if (n<=2) return 1;
    return fib2(n - 1 )+fib2(n - 2 );
};
console.time();
console.log(fib2(40))
console.timeEnd();
