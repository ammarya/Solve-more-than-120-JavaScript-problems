const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
// Object.defineProperty(myObj, "id", {
//   writable: false,
//   enumerable: false,
//   configurable: true,
// })

// Object.defineProperty(myObj, "score", {
//   writable: false,
//   enumerable: true,
//   configurable: false,
// })

// Object.defineProperty(myObj, "country", {
//   writable: false,
//   enumerable: false,
//   configurable: true,
// });

Object.defineProperties(myObj, {
  id: {
    writable: false,
    enumerable: false,
    configurable: true,
  },
  score: {
    writable: false,
    enumerable: true,
    configurable: false,
  },
  country: {
    writable: false,
    enumerable: false,
    configurable: true,
  },
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// { username: 'Elzero', score: 1000, id: 100 }