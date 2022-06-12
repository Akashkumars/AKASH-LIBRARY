console.log("this is the collage library tutorial ");

// create a constructor 
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}


// create a display constructor
function Display() {

}

// add method to display prototype
Display.prototype.add = function (book) {
    console.log("you are adding in gui");
    let tablebody = document.getElementById("tablebody");
    let html = `
    <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
</tr>
    `
    tablebody.innerHTML += html;

}

// clear method to display prototype 
Display.prototype.clear = function () {
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();
}

// 
Display.prototype.validate=function(book){
     if(book.name.length<2 || book.name.length<2){
        return false;
     }else{
        return true ;
     }
}

//  show function  create 
Display.prototype.show=function(type , showmesage){
  let message=document.getElementById("message");
  let alertbold;
  if(type==="sucess"){
    alertbold=sucess;
  }else{
    alertbold="error";
  }
  message.innerHTML =`<div class="alert alert-${type}" role="alert">
  <strong>${alertbold}!</strong> ${showmesage}.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
setTimeout(() => {
    message.innerHTML=" ";
}, 3000);
}


// create the add event listner
let libraryform = document.getElementById("libraryform");
libraryform.addEventListener("submit", libraryformsubmit);


function libraryformsubmit(e) {

    // console.log("your form is submit");

    let name = document.getElementById("bookName").value;
    let author = document.getElementById("Author").value;
    let type;

    let Fiction = document.getElementById("Fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");


    if (Fiction.checked) {
        type = Fiction.value;

    } else if (programming.checked) {
        type = programming.value;

    } else if (cooking.checked) {
        type = cooking.value;
    }

    // create the book object
    let book = new Book(name, author, type);
    console.log(book);

    // creating new display object
    let display = new Display();

   if( display.validate(book)){
    display.add(book);
    display.clear();
    display.show("primary" , "your book add sucessfully");
   }else{
    display.show("danger" , "sorry your book can not be add");
   }
    

    e.preventDefault();


}