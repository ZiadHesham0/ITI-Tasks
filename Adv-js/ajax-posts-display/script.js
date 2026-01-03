const postsContainer = document.getElementById("postsContainer");
const homeLoader = document.getElementsByClassName("homeLoader")[0];
const postsLoader = document.getElementsByClassName("postsLoader")[0];
var posts = [];
function fetchData() {
  var xhr = new XMLHttpRequest();
  xhr.open("get", "https://jsonplaceholder.typicode.com/posts");
  xhr.send();
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        posts = JSON.parse(xhr.response);
        displayPosts();
      }
    }
  });
}

function displayPosts() {
  homeLoader.classList.add("hidden");
  var box = ``;
  for (let i = 0; i < posts.length; i++) {
    box += ` <div class=" bg-[#000]  border text-white mb-3 border-base-300">
        <div class=" font-semibold flex justify-between">
          ${posts[i].title}
          <div>
            <span class="text-xs py-2 px-3 font-black rounded-md mr-2 bg-[#18181B]">${posts[i].userId}</span>
            <span class=" text-xs  py-2 px-3 font-black rounded-md bg-[#18181B]">${posts[i].id}</span>
          </div>
        </div>
        <div class="text-sm">
        ${posts[i].body}
        </div>
      </div>`;
    }
    postsContainer.innerHTML = box;
}
