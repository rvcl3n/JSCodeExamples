//Closures
//Closure - it`s the combination of a function and the lexical environment within which that function was declared.
//Example from https://developer.mozilla.org/

function makeAdder(x) {
    console.log('makeAdder x '+x);
  return function(y) {
    console.log('func x '+x+' y '+y);
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12