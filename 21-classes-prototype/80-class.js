// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }

//     upvote() {
//         this.votesQty += 1
//     }
// }

// const firstComment = new Comment('First comment')

// console.log(firstComment)

// firstComment instanceof Comment
// firstComment instanceof Object

// ---------------------------------- //
class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment')

firstComment.upvote()
console.log(firstComment.votesQty);
firstComment.upvote()
console.log(firstComment.votesQty);
