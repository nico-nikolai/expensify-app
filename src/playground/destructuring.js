//Object destucturing

// const person = {
//     name: 'Nick',
//     age: 33,
//     location: {
//         city: 'ABQ',
//         temperature: 55
//     }
// };

//  const name = person.name;
//  const age = person.age;

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);


// const { city, temperature: temp} = person.location;
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}.`);
// }


// console.log(publisherName);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
    }
}

const { name: publisherName = 'Self Published' } = book.publisher;

// Array destructuring

const address = ['10908 Cordova Ave NE', 'ABQ', 'New Mexico', '87112']

const [, city, state = 'New York' ] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [hotCoffee, , mediumPrice] = item;

console.log(`A medium ${hotCoffee} costs ${mediumPrice}.`)