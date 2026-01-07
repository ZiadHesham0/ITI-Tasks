var booksNumContainer = document.getElementById("booksNumContainer");
var booksNumInput = document.getElementById("booksNumInput");
var numError = document.getElementById("numError");
var numSubmitBtn = document.getElementById("numSubmitBtn");
var booksNumber = 1;

var dialog = document.querySelector("dialog");

var page3 = document.getElementById("page3");
var booksInfoForm = document.getElementById("booksInfoForm");
var bookNameInput = document.getElementById("bookNameInput");
var bookPriceInput = document.getElementById("bookPriceInput");
var authorNameInput = document.getElementById("authorNameInput");
var authorEmailInput = document.getElementById("authorEmailInput");
var bookNameError = document.getElementById("bookNameError");
var bookPriceError = document.getElementById("bookPriceError");
var authorNameError = document.getElementById("authorNameError");
var authorEmailError = document.getElementById("authorEmailError");
var BookInfoSubmitBtn = document.getElementById("BookInfoSubmitBtn");
var booksPage = document.getElementById("booksPage");
var tableBody = document.getElementById("tableBody");
var booksLibrary = [ ];
// {name:"ziad" , price:20 , author:{name:"ahemd" , email:"asjdf@gmail.com"}}
// Book Class
function Book(n, p, a) {
  this.name = n;
  this.price = p;
  this.author = a;
  Book.counter++;
}
Book.counter = 0;
//Author Class
function Author(n, e) {
  this.name = n;
  this.email = e;
}

// validate number of books Entered;
function validateBooksNum() {
  if (booksNumInput.value <= 0 || booksNumInput.value > 10) {
    numError.classList.remove("hidden");
    return false;
  } else {
    numError.classList.add("hidden");
    booksNumber = +booksNumInput.value;
    return true;
  }
}
// validate Name of books Entered;
function validateBookName() {
  if (!isNaN(bookNameInput.value)) {
    bookNameError.classList.remove("hidden");
    console.log("nooo");

    return false;
  } else {
    bookNameError.classList.add("hidden");
    console.log("yes");

    return true;
  }
}
// validate Price of books Entered;
function validateBookPrice() {
  if (bookPriceInput.value <= 0 || bookPriceInput.value > 10000) {
    bookPriceError.classList.remove("hidden");
    console.log("nooo BP");

    return false;
  } else {
    bookPriceError.classList.add("hidden");
    console.log("yesBP");
    return true;
  }
}
// validate Name of Author Entered;
function validateAuthorName() {
  if (!isNaN(authorNameInput.value) || authorNameInput.value.length < 3) {
    authorNameError.classList.remove("hidden");
    console.log("no A name");
    return false;
  } else {
    authorNameError.classList.add("hidden");
    console.log("yes An");
    return true;
  }
}

function validateAuthorEmail() {
  var mailRegex = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
  //   console.log(mailRegex.test(authorEmailInput.value));
  if (mailRegex.test(authorEmailInput.value)) {
    authorEmailError.classList.add("hidden");

    return true;
  } else {
    authorEmailError.classList.remove("hidden");

    return false;
  }
}

// take value from Books Number Input
booksNumInput.addEventListener("blur", validateBooksNum);

// Submit Number of Books , hide its form and show books info form
numSubmitBtn.addEventListener("click", function () {
  if (validateBooksNum()) {
    booksNumber = +booksNumInput.value;
    booksNumContainer.classList.add("hidden");
    booksInfoForm.classList.remove("hidden");
  }
});

bookNameInput.addEventListener("blur", validateBookName);
bookPriceInput.addEventListener("blur", validateBookPrice);
authorNameInput.addEventListener("blur", validateAuthorName);
authorEmailInput.addEventListener("blur", validateAuthorEmail);

BookInfoSubmitBtn.addEventListener("click", function () {
  console.log("submit clicked");
  console.log(booksNumber);

  // if any invalid input don't do any thing
  if (
    !validateBookName() ||
    !validateBookPrice() ||
    !validateAuthorName() ||
    !validateAuthorEmail()
  ) {
    return;
  }

  var author = new Author(authorNameInput.value, authorEmailInput.value);
  var book = new Book(bookNameInput.value, bookPriceInput.value, author);
  booksLibrary.push(book);
  console.log(booksLibrary);
  bookNameInput.value = "";
  bookPriceInput.value = "";
  authorNameInput.value = "";
  authorEmailInput.value = "";
  booksNumber--;
  if (booksNumber == 0) {
    console.log(booksNumber);
    booksInfoForm.classList.add("hidden");
    page3.classList.remove("hidden");
  }
  renderTableData();
});

function renderTableData() {
  console.log(booksLibrary);
  tableBody.innerHTML = ``;
  for (let i = 0; i < booksLibrary.length; i++) {
    var newRow = ` <tr class="hover:bg-base-300" data-id="${i}">
                <th>${i + 1}</th>
                <td>${booksLibrary[i].name}</td>
                <td>${booksLibrary[i].price}</td>
                <td>${booksLibrary[i].author.name}</td>
                <td>${booksLibrary[i].author.email}</td>
                <td>
                  <button
                    onclick ="updateBook(${i})"
                    id="BookInfoSubmitBtn"
                    class="text-md cursor-pointer relative font-semibold text-blue-500 group px-6 py-2.5"
                  >
                    <span class="relative z-10">Update</span>
                    <span
                      class="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </button>
                </td>
                <td>
                  <button
                  onclick="deleteBook(${i})"
                    id="BookInfoSubmitBtn"
                    class="text-md cursor-pointer relative font-semibold text-red-500 group px-6 py-2.5"
                  >
                    <span class="relative z-10">Delete</span>
                    <span
                      class="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </button>
                </td>
              </tr>`;
    tableBody.innerHTML += newRow;
  }
}
renderTableData();

function deleteBook(id) {
  booksLibrary.splice(id, 1);
  renderTableData();
}

function updateBook(i) {
  var updatedTR = document.querySelector(`tr[data-id="${i}"]`);
  updatedTR.innerHTML = `<tr class="hover:bg-base-300" data-id="${i}">
                <th>${i + 1}</th>
                <td><input 
                                class="mt-1 p-2 w-full block border-blue-500 bg-gray-50 rounded-md text-black outline-0 focus:o focus:border-blue-500 focus:border-2"
                                type="text" value = ${booksLibrary[i].name}
                              /></td>
                <td><input value = ${booksLibrary[i].price}
                    class="mt-1 p-2 w-full block border-blue-500 bg-gray-50 rounded-md text-black outline-0 focus:o focus:border-blue-500 focus:border-2"
                    type="price"
                    /></td>
                <td><input value = ${booksLibrary[i].author.name}
                      class="mt-1 p-2 w-full block border-blue-500 bg-gray-50 rounded-md text-black outline-0 focus:o focus:border-blue-500 focus:border-2"
                      type="text"
                      /></td>
                <td><input value = ${booksLibrary[i].author.email}
                    class="mt-1 p-2 w-full block border-blue-500 bg-gray-50 rounded-md text-black outline-0 focus:o focus:border-blue-500 focus:border-2"
                    type="text"
                    /></td>
                <td>
                  <button
                    onclick ="saveUpdate(${i})"
                    class="text-md cursor-pointer relative font-semibold text-green-500 group px-6 py-2.5"
                  >
                    <span class="relative z-10">Save</span>
                    <span
                      class="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </button>
                </td>
                <td>
                  <button
                  onclick="renderTableData()"
                    class="text-md cursor-pointer relative font-semibold text-red-500 group px-6 py-2.5"
                  >
                    <span class="relative z-10">Cancel</span>
                    <span
                      class="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </button>
                </td>
              </tr>`;

  // `<td><input type="text" value="${bookList[idx].title}" /></td>
  //   <td><input type="number" value="${bookList[idx].price}" /></td>
  //   <td><input type="text" value="${bookList[idx].author.name}" /></td>
  //   <td><input type="email" value="${bookList[idx].author.email}" /></td>
  //   <td>
  //     <button class="bg-green-500 text-white px-2 py-[3px]" data-index="${idx}">
  //       Save
  //     </button>
  //     <button class="bg-blue-500 text-white px-2 py-[3px]" data-index="${idx}">
  //       Cancel
  //     </button>
  //   </td>`
}


function saveUpdate(id) {
  var inputs = document.querySelectorAll("tbody tr input");
  // console.log(inputs);
  // console.log(inputs[0].value);
  
  
  booksLibrary[id].name = inputs[0].value;
  booksLibrary[id].price = inputs[1].value;
  booksLibrary[id].author.name = inputs[2].value;
  booksLibrary[id].author.email = inputs[3].value;
 console.log(booksLibrary);
 
  renderTableData();
}
















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
  if (
    !isNaN(modalAuthorNameInput.value) &&
    modalAuthorNameInput.value.length < 3
  ) {
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
  console.log("submit clicked hereeeee");

  // if any invalid input don't do any thing
  if (
    !validateModalBookName() ||
    !validateModalBookPrice() ||
    !validateModalAuthorName() ||
    !validateModalAuthorEmail()
  ) {
    return;
  }
  var author = new Author(
    modalAuthorNameInput.value,
    modalAuthorEmailInput.value
  );
  var book = new Book(
    modalBookNameInput.value,
    modalBookPriceInput.value,
    author
  );
  booksLibrary.push(book);
  console.log(booksLibrary);
  modalBookNameInput.value = "";
  modalBookPriceInput.value = "";
  modalAuthorNameInput.value = "";
  modalAuthorEmailInput.value = "";
  // modalBooksInfoForm.classList.add("hidden");
  dialog.removeAttribute("open");
  renderTableData();
});
