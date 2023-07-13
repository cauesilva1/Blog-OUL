
interface IPost {
  id: number;
  title: string;
  imageUrl: string;
  body: string;
}

function renderPosts() {

  let posts: IPost[] = [
    {
      id: 1,
      title: "Post 1",
      imageUrl: "../public/post.png",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!.",
    },
  
    {
      id: 2,
      title: "Post 2",
      imageUrl: "../public/post.png ",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!.",
    },
  
    {
      id: 3,
      title: "Post 3",
      imageUrl: "../public/post.png ",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!.",
    },
    {
      id: 4,
      title: "Post 4",
      imageUrl: "../public/post.png ",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!.",
    },
    {
      id: 5,
      title: "Post 5",
      imageUrl: "../public/post.png ",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!.",
    },
    {
      id: 6,
      title: "Post 6",
      imageUrl: "../public/post.png ",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!.",
    },
    {
      id: 7,
      title: "Post 7",
      imageUrl: "../public/post.png ",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!.",
    },
    {
      id: 8,
      title: "Post 8",
      imageUrl: "../public/post.png ",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!",
    },
  ];
  
  const postListContainer = document.getElementById("cardPost");

  if (postListContainer) {
    postListContainer.innerHTML = "";

    posts.map((post) => {
      const postItem = document.createElement("a");
      postItem.className = "card";
      postItem.href = `/postDetails.html?id=${post.id}`

      postItem.innerHTML = `

            <img src="${post.imageUrl}" alt="post" />
            <h3>${post.title}</h3>
            <div class="textCard">
              <p>${post.body}</p>
            </div>
            <span>Expand...</span>

        `;

      postListContainer.appendChild(postItem);
    });
  }

}

console.log(renderPosts())

