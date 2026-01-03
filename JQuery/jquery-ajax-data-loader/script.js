$(document).ready(function () {
  $("#load-all").click(function () {
    $.get("https://jsonplaceholder.typicode.com/posts", function (data) {
      $(".no-data").hide("fast");
      $("#post-count").text(`${100}`);
      //   for (let i = 0; i < data.length; i++) {
      //     $("#posts-container").append(
      //       "<div class='new-item'>appended item</div>"
      //     );
      //   }
      var box = ``;
      for (let i = 0; i < data.length; i++) {
        box += ` <div class="post-card">
                                <p class="post-title">${data[i].title}</p>
                                <p class="post-body">${data[i].body}</p>
                            </div>`;
      }
      $("#posts-container").html(box);
    });
  });
  $("#load-user1").click(function () {
    $.get("https://jsonplaceholder.typicode.com/posts", function (data) {
      $(".no-data").hide("fast");
      console.log(data);
      $("#post-count").text(`10`);
      var box = ``;
      for (let i = 0; i < 10; i++) {
        box += ` <div class="post-card">
                                <p class="post-title">${data[i].title}</p>
                                <p class="post-body">${data[i].body}</p>
                            </div>`;
      }
      $("#posts-container").html(box);
    });
  });
  $("#load-user2").click(function () {
    $.get("https://jsonplaceholder.typicode.com/posts", function (data) {
      $(".no-data").hide("fast");
      console.log(data);
      $("#post-count").text(`${10}`);
      var box = ``;
      for (let i = 10; i < 20; i++) {
        box += ` <div class="post-card">
                                <p class="post-title">${data[i].title}</p>
                                <p class="post-body">${data[i].body}</p>
                            </div>`;
      }
      $("#posts-container").html(box);
    });
  });
});


// ask him how can i get only the posts of user 1 or 2 without fixed indexes