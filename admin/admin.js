const postForm = document.getElementById('post-form');
const postsList = document.getElementById('posts-list');

// Fetch existing posts
let posts = JSON.parse(localStorage.getItem('posts')) || [];

function displayPosts() {
  postsList.innerHTML = '';
  posts.forEach((post, index) => {
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <p><small>By ${post.author} on ${post.date}</small></p>
      <button onclick="deletePost(${index})">Delete</button>
    `;
    postsList.appendChild(postDiv);
  });
}

function deletePost(index) {
  posts.splice(index, 1);
  localStorage.setItem('posts', JSON.stringify(posts));
  displayPosts();
}

postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const newPost = {
    title: document.getElementById('title').value,
    content: document.getElementById('content').value,
    author: document.getElementById('author').value,
    date: document.getElementById('date').value
  };
  
  posts.push(newPost);
  localStorage.setItem('posts', JSON.stringify(posts));
  displayPosts();
  
  postForm.reset();
});

displayPosts();
