function renderPosts() {
    var posts = [
        {
            id: 1,
            title: "Post 1",
            imageUrl: "../image/post.png",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!.",
        },
        {
            id: 2,
            title: "Post 2",
            imageUrl: "../image/post.png",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!.",
        },
        {
            id: 3,
            title: "Post 3",
            imageUrl: "../image/post.png",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!.",
        },
        {
            id: 4,
            title: "Post 4",
            imageUrl: "../image/post.png",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!.",
        },
        {
            id: 5,
            title: "Post 5",
            imageUrl: "../image/post.png",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!.",
        },
        {
            id: 6,
            title: "Post 6",
            imageUrl: "../image/post.png",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!.",
        },
        {
            id: 7,
            title: "Post 7",
            imageUrl: "../image/post.png",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!.",
        },
        {
            id: 8,
            title: "Post 8",
            imageUrl: "../image/post.png",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, illo blanditiis esse laboriosam aspernatur quaerat, quis modi consequuntur ea, eaque accusamus distinctio quasi eos nostrum. Id itaque in beatae a!",
        },
    ];
    var postListContainer = document.getElementById("cardPost");
    if (postListContainer) {
        postListContainer.innerHTML = "";
        posts.map(function (post) {
            var postItem = document.createElement("article");
            postItem.className = "card";
            postItem.innerHTML = "\n            <img src=\"".concat(post.imageUrl, "\" alt=\"post\" />\n            <h3>").concat(post.title, "</h3>\n            <div class=\"textCard\">\n              <p>").concat(post.body, "</p>\n            </div>\n            <a href=\"../PostDetails/postDetails.html\">Expand...</a>\n        ");
            postListContainer.appendChild(postItem);
        });
    }
}
console.log(renderPosts());
