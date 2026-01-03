import {
  getCookie,
  setCookie,
  allCookieList,
  deleteCookie,
  hasCookie,
  myDate,
} from "./cookie.js";
var formContainer = document.getElementById("formContainer");
var userName = document.getElementById("userName");
var userAge = document.getElementById("userAge");
var userGender = document.getElementById("userGender");
var userColor = document.getElementById("userColor");
var AgeError = document.getElementById("AgeError");
var nameError = document.getElementById("nameError");
var nameFlag = false;
var ageFlag = false;
var submitBtn = document.getElementById("submitBtn");
var userGenderContainer = document.getElementById("userGenderContainer");

// if its first time for user to visit us --> make the visits time = 1 , else increase the time of visits
if (!hasCookie("visitTimes")) {
  console.log("hello");
  setCookie("visitTimes", 1, myDate);
} else {
  var numberOfVisits = +getCookie("visitTimes");
  numberOfVisits++;
  setCookie("visitTimes", numberOfVisits, myDate);
}

userName.addEventListener("blur", function () {
  if (!isNaN(userName.value)) {
    nameError.classList.remove("hidden");
    nameFlag = false;
  } else {
    nameError.classList.add("hidden");
    nameFlag = true;
    setCookie("userName", userName.value, myDate);
  }
});

userAge.addEventListener("blur", function () {
  if (userAge.value < 16 || userAge.value > 90) {
    AgeError.classList.remove("hidden");
    ageFlag = false;
  } else {
    AgeError.classList.add("hidden");
    ageFlag = true;
    setCookie("userAge", userAge.value, myDate);
  }
});

userColor.addEventListener("change", function () {
  setCookie("userColor", userColor.value, myDate);
});

userGenderContainer.addEventListener("change", function (e) {
  console.log(e.target.value);
  setCookie("userGender", e.target.value, myDate);
});


submitBtn.addEventListener("click", function () {
  if (!ageFlag) {
    AgeError.classList.remove("hidden");
    return;
  }
  if (!nameFlag) {
    nameError.classList.remove("hidden");
    return;
  }
  formContainer.classList.add("hidden");
  // if user is male append the male image
  if (getCookie("userGender") == "male") {
    document.body.innerHTML = ` <div class="userInfo flex justify-center items-center text-white gap-x-5 text-2xl w-full">
      <img src="assets/male.jpg" alt="" class="w-15">
      <p>Hello <span class="text-[${getCookie("userColor")}] id="userName">${getCookie(
        "userName"
      )}</span> You visited this site <span class="text-[${getCookie("userColor")}]" id="visitTimes">${getCookie(
      "visitTimes"
    )}</span> times</p>
    </div>`;
  } 
  // if user is female append the female image 
  else if (getCookie("userGender") == "female") {
    document.body.innerHTML = ` <div class="userInfo flex justify-center items-center text-white gap-x-5 text-2xl w-full">
      <img src="assets/female.jpg" alt="" class="w-15">
      <p>Hello <span class="text-[${getCookie("userColor")}] id="userName">${getCookie(
        "userName"
      )}</span> You visited this site <span class="text-[${getCookie("userColor")}] id="visitTimes">${getCookie(
      "visitTimes"
    )}</span> times</p>
    </div>`;
  }
});
