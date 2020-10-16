//Closures
//Closure - it`s the combination of a function and the lexical environment within which that function was declared.
//Example from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

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

//Example from https://www.w3schools.com/js/js_function_closures.asp

var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter;}
  })();

  console.log(add());
  console.log(add());
  console.log(add());