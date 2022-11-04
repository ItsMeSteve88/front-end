var facebookPost = {
    message: "I am learning JavaScript!",
    likes: 7,
    comments: [
        {
            user: "John",
            comment: "I am learning too!"
        },
        {
            user: "Jane",
            comment: "Me too!"
        },
        {
            user: "Mary",
            comment: "Me three!"
        }
    ],
    share: 0,
};

console.log(facebookPost);
console.log(facebookPost.comments.length);

// adding a new property to an object

facebookPost["dislikes"] = 8;

// how to get all the keys of an object

console.log(Object.keys(facebookPost));

// how to get all the values of an object

console.log(Object.values(facebookPost));

// how to get all the keys and values of an object

console.log(Object.entries(facebookPost));