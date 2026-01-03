function Shape(d) {
  if (this.constructor == Shape) {
    throw "This is an abstract class";
  }
  this.dimension1 = d;
}
Shape.prototype.Area = function () {
    throw new Error("This Function must be overridden ");
}; // abstract  Method 


///////////////////// Rectangle Class ////////////////////////////
function Rectangle(d1, d2) {
  if (Rectangle.counter == 1) {
    throw new Error("Only one Rectangle can be created ");
  }
  Shape.call(this, d1);
  this.dimension2 = d2;
  Rectangle.counter++;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.Area = function () {
  return this.dimension1 * this.dimension2;
};
Rectangle.counter = 0; // to restrict creating more than one rectangle


///////////////////// Square Class ////////////////////////////
function Square(d1) {
  if (Square.counter == 1) {
    throw new Error("Only one Square can be created ");
  }
  Shape.call(this, d1);
  Square.counter++;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.Area = function () {
  return this.dimension1 * this.dimension1;
};
Square.counter = 0;// to restrict creating more than one Square

var rec1 = new Rectangle(2, 3);
console.log(rec1);

var sqr1 = new Square(4);
console.log(sqr1);
var sqr2 = new Square(6);
