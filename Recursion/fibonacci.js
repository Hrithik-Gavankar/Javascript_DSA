function getFibonacciThNumber(n)
{
 if (n < 2)
 {
    return n;
 }
 return getFibonacciThNumber(n-1) + getFibonacciThNumber(n-2);
}

console.log(getFibonacciThNumber(5)); 
// console.log(getFibonacci(6));
// console.log(getFibonacci(15));