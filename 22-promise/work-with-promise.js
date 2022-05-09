// const myPromise = new Promise((resolve, reject) => {

// });

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => {
//    console.log(response)
//    return response.json() 
// })
// .then(json => console.log(json))
// .catch(error => console.error(error))

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.error(error))
