// function multByFactor(value, multiplier = 1) {
//     return value * multiplier;
// }

// multByFactor(10, 2);
// multByFactor(5);

// console.log(multByFactor(10, 2))
// console.log(multByFactor(5))

// -------------------------- //
// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt,
// })

// const newPost2 = (post, addedAt = Date()) => {
//    return { ...post, addedAt};
// }

// const firstPost = {
//     id: 1,
//     author: 'Yulia',
// }
// console.log(newPost(firstPost))

// ------------------------------ //

// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt,
// })

// const firstPost = {
//     id: 1,
//     author: 'Yulia',
// }

// console.log(newPost(firstPost))

// ------------------------------------ //
const newPost2 = (post, addedAt = Date()) => {
    return { ...post, addedAt};
 }
 
 const firstPost = {
     id: 1,
     author: 'Yulia',
 }
 console.log(newPost2(firstPost))
 
 
 
 

