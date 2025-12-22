var nameInp = document.getElementById("nameInput")
var numInp = document.getElementById("numInput")
var mailInp = document.getElementById("mailInput")
var submitBtn = document.getElementById("submitBtn")
var resetBtn = document.getElementById("resetBtbn")
var tableData = document.getElementById("tableData")
var tableData = document.getElementById("tableData")
var nameError = document.getElementById("nameError");
var numError = document.getElementById("numError");
var mailError = document.getElementById("mailError")
var validName = false;
var validAge = false;

nameInp.addEventListener("blur", function () {
    if (nameInp.value === '') {
        nameError.innerText = "Required Field";
        validName = false;
    }
    else {
        validName = true
    }
    // console.log(nameInp.value);
})

numInp.addEventListener("blur", function () {
    if (numInp.value === '') {
        numError.innerText = "Required Field";
        validAge = false;
    }
    else {
        validAge = true;
    }
    // console.log(numInp.value);
})

mailInp.addEventListener("blur", function () {
    if (mailInp.value === '') {
        mailError.innerText = "Required Field";
        validAge = false;
    }
    else {
        validAge = true;
    }
    // console.log(numInp.value);
})


function validateMail(email) {
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}


submitBtn.addEventListener("click", function (e) {
    e.preventDefault()
    console.log(validAge);
    console.log(validName);
    console.log(!validateMail());

    if (validAge && validName && !validateMail()) {
        tableData.innerHTML += `
                 <tr>
                    <td>${nameInp.value}</td>
                    <td>${numInp.value}</td>
                    <td>${mailInp.value}</td>
                </tr>
       `
    }
})
resetBtn.addEventListener("click", function (e) {
    e.preventDefault()
    nameInp.value = ''
    numInp.value = ''
    mailInp.value = ''
})
