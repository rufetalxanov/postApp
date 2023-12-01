const postPanel = document.querySelector("#postPanel");

const posts = document.querySelector("#posts");

const postInput = document.querySelector("#postInput");

const shareBtn = document.querySelector("#shareBtn");

const postBodyInput = document.querySelector("#postBodyInput");

let fullname;
let image;

const start = () => {
  fullname = prompt("Zehmet olmasa adinizi daxil edin");
  image = prompt("Zehmet olmasa sekilinizi  daxil edin");

  if (!fullname.trim()) {
    alert("sisteme daxil olmur");
    return;
  }

  renderPosts();
};

async function renderPosts() {
  try {
    const data = await getPosts();

    // const data=await data.json()

    const content = data.reverse().map((post) => {
      const createdTime = convertTime(post.created);

      return `<div  class="card  shadow " >
<img style="object-fit: cover;"height="400"  src=" https://pathofex.com/wp-content/uploads/2022/08/Instagram-in-2022_4x3.png " class="card-img-top" alt="${
        post.title
      }"/>
<div class="card-body">
  <h5 class="card-title">${post.title}</h5>

  <p class="card-text">${post.body}</p>
  <h6 class="card-subtitle mb-2 mt-4 text-body-secondary ">${createdTime}</h6>

</div>

<div  class="m-3 d-flex align-items-center gap-4">


<img class="rounded-circle shadow" height="50" width="50"  style="object-fit: cover;" src="${
        post.image
          ? post.image
          : "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png"
      }" alt="">

<p class="h6">${post.fullname ? post.fullname : "Anonim"}</p>  

</div>



</div>
`;
    });

    posts.innerHTML = content;
    console.log("data", data);
  } catch (err) {
    // alert("error")
  }
}

shareBtn.addEventListener("click", async function () {
  try {
    const title = postInput.value.trim();
    const body = postBodyInput.value.trim();
    postInput.value = "";
    postBodyInput.value = "";

    const newPostData = {
      title,
      body,
      fullname,
      image,
      created: new Date(),
    };
    console.log("newPostData", newPostData);

    await addPosts(newPostData);

    renderPosts();
  } catch (err) {
    console.log("err", err);
  }
});

start();
