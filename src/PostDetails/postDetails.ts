interface postDetails {
  id: number;
  title: string;
  imageUrl: string;
  body: string;
}

interface Coment {
  id: number;
  name: string;
  Email: string;
  body: string;
}

interface ComentsUsers {
  postId: number;
  coments: Coment[];
}

let ComentUsers: ComentsUsers[] = [
  {
    postId: 1,
    coments: [
      {
        id: 3,
        name: "ze da pistola",
        Email: "cauecatonesilva@gmail.com",
        body: "post maravilhoso",
      },
      {
        id: 4,
        name: "je",
        Email: "cauecatonesilva@gmail.com",
        body: "post maravilhoso",
      },
      {
        id: 5,
        name: "jo",
        Email: "cauecatonesilva@gmail.com",
        body: "post maravilhoso",
      },
      {
        id: 6,
        name: "os",
        Email: "cauecatonesilva@gmail.com",
        body: "post maravilhoso",
      },
    ],
  },

  {
    postId: 2,
    coments: [
      {
        id: 3,
        name: "Joao nascimento",
        Email: "Joaonascimento@gmail.com",
        body: "post maravilhoso de lindo",
      },
      {
        id: 4,
        name: "zezinho do gás",
        Email: "gasdoze@gmail.com",
        body: "me ajudou demais",
      },
      {
        id: 5,
        name: "joao",
        Email: "joao@gmail.com",
        body: "post horrivel",
      },
    ],
  },

  {
    postId: 3,
    coments: [
      {
        id: 3,
        name: "Joao nascimento",
        Email: "Joaonascimento@gmail.com",
        body: "post maravilhoso de lindo",
      },
      {
        id: 4,
        name: "zezinho do gás",
        Email: "gasdoze@gmail.com",
        body: "me ajudou demais",
      },
      {
        id: 5,
        name: "joao",
        Email: "joao@gmail.com",
        body: "post horrivel",
      },
    ],
  },

  {
    postId: 4,
    coments: [
      {
        id: 3,
        name: "Joao nascimento",
        Email: "Joaonascimento@gmail.com",
        body: "post maravilhoso de lindo",
      },
      {
        id: 4,
        name: "zezinho do gás",
        Email: "gasdoze@gmail.com",
        body: "me ajudou demais",
      },
      {
        id: 5,
        name: "joao",
        Email: "joao@gmail.com",
        body: "post horrivel",
      },
    ],
  },

  {
    postId: 5,
    coments: [
      {
        id: 3,
        name: "Joao nascimento",
        Email: "Joaonascimento@gmail.com",
        body: "post maravilhoso de lindo",
      },
      {
        id: 4,
        name: "zezinho do gás",
        Email: "gasdoze@gmail.com",
        body: "me ajudou demais",
      },
      {
        id: 5,
        name: "joao",
        Email: "joao@gmail.com",
        body: "post horrivel",
      },
    ],
  },

  {
    postId: 6,
    coments: [
      {
        id: 3,
        name: "Joao nascimento",
        Email: "Joaonascimento@gmail.com",
        body: "post maravilhoso de lindo",
      },
      {
        id: 4,
        name: "zezinho do gás",
        Email: "gasdoze@gmail.com",
        body: "me ajudou demais",
      },
      {
        id: 5,
        name: "joao",
        Email: "joao@gmail.com",
        body: "post horrivel",
      },
    ],
  },

  {
    postId: 7,
    coments: [
      {
        id: 3,
        name: "Joao nascimento",
        Email: "Joaonascimento@gmail.com",
        body: "post maravilhoso de lindo",
      },
      {
        id: 4,
        name: "zezinho do gás",
        Email: "gasdoze@gmail.com",
        body: "me ajudou demais",
      },
      {
        id: 5,
        name: "joao",
        Email: "joao@gmail.com",
        body: "post horrivel",
      },
    ],
  },

  {
    postId: 8,
    coments: [
      {
        id: 3,
        name: "Joao nascimento",
        Email: "Joaonascimento@gmail.com",
        body: "post maravilhoso de lindo",
      },
      {
        id: 4,
        name: "zezinho do gás",
        Email: "gasdoze@gmail.com",
        body: "me ajudou demais",
      },
      {
        id: 5,
        name: "joao",
        Email: "joao@gmail.com",
        body: "post horrivel",
      },
    ],
  },

];

let postDetails: postDetails[] = [
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

function renderPostDetails() {
  
  const urlParams = new URLSearchParams(window.location.search);

  const id = urlParams.get("id") as string; 

  const filterPostById = postDetails.find(
    (post) => post.id === parseInt(id, 10)
  );

  const RenderDetails = document.querySelector("#postDetals");

  const renderComents = document.querySelector(".Coments");

  const FilterComents = ComentUsers.find(
    (post) => post.postId === filterPostById?.id
  );

    console.log(FilterComents)
    console.log(renderComents)

if (filterPostById && RenderDetails) {
    RenderDetails.innerHTML = `

          <img src="./public/postDetals.png" alt="POST">
  
          <div class="infPost">
              <h2>${filterPostById.title}</h2>
  
              <p>${filterPostById.body}</p>

          </div>

            `;
  }

  if (renderComents) {
    FilterComents?.coments.map((coment) => {
      const listComent = document.createElement("div");

      console.log(coment);

      listComent.innerHTML = `
        <div class="comentUser">
        <span class="UserInf">${coment.name}:${coment.Email}:<span class="UserComent">${coment.body}</span></span>
        </div> 
        `;

      renderComents?.appendChild(listComent);
    });
  }
}

console.log(renderPostDetails());
