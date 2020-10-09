var nameVar = 'Nick';
var nameVar = 'Andrew';
console.log('nameVar', nameVar);

let nameLet = 'Haley';
nameLet = 'Jen';
console.log('nameLet', nameLet);

const nameConst = 'Dennis';
console.log('nameConst', nameConst);

const fullName = 'Nick Rose';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName)