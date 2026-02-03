function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}


1. /*
1. get the container element where you want to add the new elements
2. create child element
3. set innerText or innerHTML
4.appendChild
*/
function displayPosts(posts){
    const postContainer = document.getElementById('posts-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        //class add korchi background colouer ar 
       postDiv.classList.add('post')
        console.log(post);
        postDiv.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
    }
}
loadPosts();