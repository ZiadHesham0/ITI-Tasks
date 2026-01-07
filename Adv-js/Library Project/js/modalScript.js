var modalBooksInfoForm = document.getElementById("modalBooksInfoForm");
var modalBookNameInput = document.getElementById("modalBookNameInput");
var modalBookPriceInput = document.getElementById("modalBookPriceInput");
var modalAuthorNameInput = document.getElementById("modalAuthorNameInput");
var modalAuthorEmailInput = document.getElementById("modalAuthorEmailInput");
var modalBookNameError = document.getElementById("modalBookNameError");
var modalBookPriceError = document.getElementById("modalBookPriceError");
var modalAuthorNameError = document.getElementById("modalAuthorNameError");
var modalAuthorEmailError = document.getElementById("modalAuthorEmailError");
var modalBookInfoSubmitBtn = document.getElementById("modalBookInfoSubmitBtn");



// validate Name of books Entered;
function validateModalBookName() {
  if (!isNaN(modalBookNameInput.value)) {
    modalBookNameError.classList.remove("hidden");
    return false;
  } else {
    modalBookNameError.classList.add("hidden");
    return true;
  }
}
// validate Price of books Entered;
function validateModalBookPrice() {
  if (modalBookPriceInput.value <= 0 || modalBookPriceInput.value > 10000) {
    modalBookPriceError.classList.remove("hidden");
    return false;
  } else {
    modalBookPriceError.classList.add("hidden");
    return true;
  }
}
// validate Name of Author Entered;
function validateModalAuthorName() {
  if (!isNaN(modalAuthorNameInput.value) && modalAuthorNameInput.value.length < 3) {
    modalAuthorNameError.classList.remove("hidden");
    return false;
  } else {
    modalAuthorNameError.classList.add("hidden");
    return true;
  }
}

function validateModalAuthorEmail() {
  var mailRegex = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
  //   console.log(mailRegex.test(modalAuthorEmailError.value));
  if (mailRegex.test(modalAuthorEmailInput.value)) {
    modalAuthorEmailError.classList.add("hidden");
    console.log("hello");
    
    return true;
  } else {
    modalAuthorEmailError.classList.remove("hidden");
    console.log("hellasdasdaso");

    return false;
  }
}



modalBookNameInput.addEventListener("blur", validateModalBookName);
modalBookPriceInput.addEventListener("blur", validateModalBookPrice);
modalAuthorNameInput.addEventListener("blur", validateModalAuthorName);
modalAuthorEmailInput.addEventListener("blur", validateModalAuthorEmail);
modalBookInfoSubmitBtn.addEventListener("click", function () {
  console.log("submit clicked");
  console.log(booksNumber);

  // if any invalid input don't do any thing
  if (
    (
      !validateModalBookName() ||
      !validateModalBookPrice() ||
      !validateModalAuthorName() ||
      !validateModalAuthorEmail()
    )
  ) {
    return;
  }

  var author = new Author(modalAuthorNameInput.value, modalAuthorEmailInput.value);
  var book = new Book(modalBookNameInput.value, modalBookPriceInput.value, author);
  booksLibrary.push(book);
  console.log(booksLibrary);
  modalBookNameInput.value = "";
  modalBookPriceInput.value = "";
  modalAuthorNameInput.value = "";
  modalAuthorEmailInput.value = "";
  booksNumber--;
  if (booksNumber == 0) {
    modalBooksInfoForm.classList.add("hidden");
  }


});





