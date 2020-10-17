//Example from https://www.toptal.com/javascript/interview-questions

(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));

//the same as
//b = 3;
//var a = b;

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);