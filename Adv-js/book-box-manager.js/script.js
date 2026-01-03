function Book(t ,a , p , copiesNum){
    this.title = t;
    this.author = a;
    this.price = p;
    this.numOfCopies = copiesNum;
}


function Box(h , w){
    this.height = h;
    this.width = w;
    var books = [] // content --> array of books

    this.getCounter = function(){
        return books.length;
    }

    this.addBook = function(newBook){
        if(newBook.constructor == Book)
            books.push(newBook);
        else
            throw new Error("it must be a book");           
    };

    this.deleteBook = function(bookName){
        for (let i = 0; i < books.length; i++) {
            if(books[i].title == bookName)
            {
                books.splice(i , 1 ); 
            }
        }
    };

    this.toString = function(){
        return (`Box height is : ${this.height} , Width is : ${this.width} , number of Books : ${this.getCounter()}`);
    }

    this.valueOf = function(){
        return (this.getCounter());
    }
}

Box.countBox 

var book1 = new Book("success" , "ziad", 20 , 10 );
var book2 = new Book("fail" , "ziad", 10 , 1 );
var book3 = new Book("life" , "ziad", 50 , 12 );

var box1 = new Box(10 , 2);
var box2 = new Box(115 , 30);
box1.addBook(book1);
box1.addBook(book2);
box1.addBook(book3);
box1.deleteBook("fail");
console.log(box1.toString());
console.log(box1.getCounter());
box2.addBook(book2);
console.log(box1+box2);
