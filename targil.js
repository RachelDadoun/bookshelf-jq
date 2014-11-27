$(document).on("ready", function(){
window.Books=[];
window.seq=0;

$(".adddBookForm button:nth(1)").on("click",function(){

newBook = Book ($(".adddBookForm input:nth(0)").val(),$(".adddBookForm input:nth(1)").val(), $(".adddBookForm input:nth(1)").val())
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
    $("ul")append("#template");
    $("li:last-nth").attr("id", Books[i].id);
    $("#" + Books[i].id).append("<label>" + Books[i].bookName + "</label>");
    $("#" + Books[i].id).append("<label>" + Books[i].bookAuthor + "</label>");
    $("#" + Books[i].id).append("<label>" + Books[i].bookScore + "</label>");
    $("#" + Books[i].id).append("<button>" + Books[i].bookScore + "</button>");
  
};



function FillTemplate(i){
  $(".template div:nth(0)").html(Books[i].bookName);
  $(".template div:nth(1)").html(Books[i].bookAuthor);
  $(".template div:nth(2)").html(Books[i].bookScore);
  $(".template").attr("id", Books[i].id);
};
function AddTemplate(){
$("ul").append(".template");  
};

});
