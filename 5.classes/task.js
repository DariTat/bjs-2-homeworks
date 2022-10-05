class PrintEditionItem{
  constructor(name, releaseDate, pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix(){
     this.state = this.state*1.5;
  }
  set state(value){
    if (value < 0){
        value = 0;
    } else if(value> 100) {
        value = 100;
    }
    this._state = value;
  }
  get state(){
    return this._state;
  }
}
class Magazine extends PrintEditionItem{
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem{
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book{
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book{
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book{
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}
class Library{
  constructor(name){
    this.name = name;
    this.books = [];
  }
  addBook(book){
    if(book.state > 30){
      this.books.push(book);
    }
  }
  findBookBy(type, value){
    for(let i=0; i < this.books.length; i++){
      if (this.books[i][type] === value){
        return this.books[i];
      }
    } 
    return null; 
  } 
    
  giveBookByName(bookName){
    for(let i=0; i < this.books.length; i++){
      if(this.books[i].name === bookName){
        let book = this.books[i];
        this.books.splice(i,1);
        return book;
      } 
    }
    return null;
  }      
   
}
class Student{
  constructor(name){
    this.name = name;
    this.jornal = [];
  }
  addMark(mark, subject){
    if (mark >= 1 && mark <= 5){
      this.jornal = [subject];
      this.jornal[subject] = [mark];
    }
  }
  getAverageBySubject(subject){
    let sum = 0;
    if(this.jornal.subject === subject){
      for (let i = 0; i < this.jornal.mark.length; i++){
        sum += this.mark[i];
      }
      return sum/this.jornal.mark.length;
    }else {
      return "Несуществующий предмет";
    }
    
  }
}