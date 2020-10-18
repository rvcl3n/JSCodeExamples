//Example from https://nodejs.dev/learn/understanding-javascript-promises
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
});

isItDoneYet.then(val => console.log(val));
//isItDoneYet.then(val => {console.log(val); return 'res'}).then(val => console.log(val));