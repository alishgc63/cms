const postsSection = document.getElementById('posts');
const posts = JSON.parse(localStorage.getItem('posts')) || [];

function displayPosts() {
  postsSection.innerHTML = '';
  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content.substring(0, 100)}... <a href="post.html?title=${encodeURIComponent(post.title)}">Read more</a></p>
      <p><small>By ${post.author} on ${post.date}</small></p>
    `;
    postsSection.appendChild(postDiv);
  });
}

displayPosts();
