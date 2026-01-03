var obj = {
  id: "SD-10",
  location: "SV",
  addr: "123 st.",
  getSetGen: function () {
    /*should be implemented*/
    var that = this;
    for (var key in this) {
      if (typeof this[key] === "function") {
        console.log("can not generate setters and getters for this property");
        continue;
      }
      (function (that) {
        var data = that[key];
        Object.defineProperty(that, key, {
          get: function () {
            return data;
          },
          set: function (value) {
            data = value;
          },
          configurable: true,
          enumerable: true,
        });
      })(that);
    }
  },
};

console.log(obj);
obj.id = "mfm";
console.log(obj);

var user = {
  name: "Ali",
  age: 10,
};

obj.getSetGen.call(user);
user.name = "ziad";
console.log(user);
