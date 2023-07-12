import { posts } from "../data.ts";

function renderPosts() {

  const postList = document.getElementById("postList");
  postList.innerHTML = "";

  posts.forEach((post) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <div class="card">

            <img src="${post.imageUrl}" alt="post" />

            <h3>${post.title}</h3>

            <div class="textCard">    
                <p>
                    ${post.body}
                </p>

            </div>

            <a href="../PostDetals/postDetals.html">Expand...</a>
            
        </div>
    `;
    postList.appendChild(listItem);
  });
}



