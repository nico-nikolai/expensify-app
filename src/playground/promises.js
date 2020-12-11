const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Nick',
        //     age: 34
        // });
        reject('Something went wrong.')
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).then(() => {
    console.log('does this run?')
}).catch((error) => {
    console.log('error: ', error)
});

console.log('after');