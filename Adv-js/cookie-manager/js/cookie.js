export var myDate = new Date("12/31/2026");
console.log(myDate);

export function setCookie(cookieName, cookieValue, expDate) {
  document.cookie = `${cookieName} = ${cookieValue}; expires=${expDate}`;
  console.log(document.cookie);
}
export function getCookie(cookieName) {
  var arrKeyAndValues = document.cookie.split(";");
  for (let i = 0; i < arrKeyAndValues.length; i++) {
    var keyAndValue = arrKeyAndValues[i].split("=");
    if (keyAndValue[0].trim() == cookieName) {
      console.log(keyAndValue[1]);
      return keyAndValue[1];
    }
  }
  return null;

  //   arrKeyAndValues.forEach((element) => {
  //     console.log(element);
  //     var keyAndValue = element.split("=");
  //     console.log(keyAndValue);
  //     if (keyAndValue[0] == cookieName) {
  //       console.log(keyAndValue[1]);
  //         return;
  //     }
  //   });
}

export function deleteCookie(cookieName) {
  var expiredDate = new Date("1/1/2000");
  setCookie(cookieName, "", expiredDate);
}
export function hasCookie(cookieName) {
  var arrKeyAndValues = document.cookie.split(";");
  for (let i = 0; i < arrKeyAndValues.length; i++) {
    var keyAndValue = arrKeyAndValues[i].split("=");
    if (keyAndValue[0].trim() == cookieName) {
      return true;
    }
  }
  return false;
}
export function allCookieList() {
  var allCookies = [];
  var arrKeysAndValues = document.cookie.split(";");
  for (let i = 0; i < arrKeysAndValues.length; i++) {
    var keyAndValue = arrKeysAndValues[i].split("=");
    allCookies.push(keyAndValue);
  }
  return allCookies;
}
