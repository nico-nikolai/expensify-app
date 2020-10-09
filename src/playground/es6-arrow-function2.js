const add = (a, b) => {
    return a + b;
};



const user = {
    name: 'Nick',
    cities: ['Akron', 'Albuquerque', 'Norton'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}
console.log(user.printPlacesLived());


const multiplier = {
    numbers: [2, 5, 8, 10, 32],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map(num => num * this.multiplyBy)
    }
}

console.log(multiplier.multiply())