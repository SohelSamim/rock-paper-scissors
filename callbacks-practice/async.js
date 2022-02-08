//const { promise } = require("bcrypt/promises")
const posts = [
    {title : 'post one', body: 'This is post one'},
    {title : 'post two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
    
}

function createPost(post) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    posts.push(post);

    const error = false;

    if(!error) {
        resolve();
    } else {
        reject('Error: Something went Wrong');
    }

    }, 2000);

});    
}


// anync await exapmle: uncommet to use this
// async function init() {
    // await createPost({ title: 'Post Three', body: 'This is post three' });
// 
    // getPosts();
// }
// 
// init()



// asyn await with fetch! 
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();