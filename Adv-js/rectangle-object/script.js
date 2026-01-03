var rectangle = {
    height : 20,
    width : 40 ,
    area : function(){
        return (this.height*this.width)
    },
    perimeter : function(){
        return ((this.height+this.width) *2)
    },
    displayInfo : function(){
        console.log(`height : ${this.height} , width : ${this.width} , area : ${this.area()} , perimeter : ${this.perimeter()}`);
        
    }
}
rectangle.displayInfo();