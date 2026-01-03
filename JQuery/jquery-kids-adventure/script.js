var flag = false;
var intervalID;
function toggleFlag() {
  if (flag) flag = false;
  else flag = true;
}

$(document).ready(function () {
  $("#btn-blue").click(function () {
    $("#main-heading").css("color", "blue");
  });
  $("#btn-red").click(function () {
    $("#main-heading").css("color", "red");
  });
  $("#btn-green").click(function () {
    $("#main-heading").css("color", "green");
  });
  $("#btn-counter").click(function () {
    var x = Number($("#counter-value").text()) + 1;
    $("#counter-value").text(x);
  });
  $("#btn-secret").click(function () {
    $("#secret-message").slideToggle(350);
  });

  $("#btn-magic").click(function () {
    toggleFlag();
    if (flag) {
      console.log("hello");
      intervalID = setInterval(function () {
        $("#magic-box").css("background-color", getRandomColor());
      }, 200);
      console.log(intervalID);
    } else {
      console.log(intervalID);
      clearInterval(intervalID);
    }
  });
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
