$("document").on("ready", function(){
window.Books=[];
window.seq=0;

$(".addBookForm button:nth(0)").on("click",function(){

newBook = Book ($(".addBookForm input:nth(0)").val(),$(".addBookForm input:nth(1)").val(), $(".addBookForm input:nth(1)").val())
books.push(newBook);
BuildBookList();

});

function Book(bookName, bookAuthor, bookScore){
this.bookName = bookName;
this.bookAuthor = bookAuthor;
this.bookScore =  bookScore;
this.id= "book-" + seq++;
};

function BuildBookList(){

  for(var i=0;i <Books.length; I++)
  {
    AddBookToLi(i);
  }
  
};

function AddBookToLi(i){
    FillTemplate(i);
    AddTemplate();
 };

function FillTemplate(i){
  $(".template div:nth(0)").html(Books[i].bookName);
  $(".template div:nth(1)").html(Books[i].bookAuthor);
  $(".template div:nth(2)").html(Books[i].bookScore);
  $(".template").attr("id", Books[i].id);
};

function AddTemplate(){
$("ul").append("#"+Books[i].id);  
$("#"+Books[i].id).removeClass("template");
$("#"+Books[i].id).addClass("bookCard");
};

});
