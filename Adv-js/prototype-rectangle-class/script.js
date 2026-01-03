function Rectangle(h,w) {
    this.height = h;
    this.width = w ;
    increaseCounter = function(){
        counter++;
    }
    increaseCounter();
}
Rectangle.prototype.area = function(){
    return (this.height*this.width)
}
Rectangle.prototype.perimeter = function(){
    return ((this.height+this.width) *2)
}
Rectangle.prototype.toString = function(){
    return`height : ${this.height} , width : ${this.width} , area : ${this.area()} , perimeter : ${this.perimeter()}`;
}
Rectangle.prototype.getCounter = function () {
    return counter ;
}

Rectangle.counter = 0;

var rectangle =new Rectangle(5 , 20);
console.log(rectangle.toString())