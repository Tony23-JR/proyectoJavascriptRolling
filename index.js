class Book {
  constructor(id, title, description, date, author, image) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.author = author;
    this.genere = genere;
    this.image = image;
  }
  createBook(){}
  uptdateBook(){
    // if (usuario.id = id){
    //   delete usuario
    // }
  }
  deleteBook(){
    // if (usuario.id = id){
    //   delete usuario
    // }
  }
}

//funcion crear usuario 
function createUser(){
  let id =+ 1;
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  // let type = document.getElementById("type").value;
  // let age = document.getElementById("age").value;
  // let country = document.getElementById("country").value;
  // let city = document.getElementById("city").value;
  // let passport = document.getElementById("passport").value;
  // let address = document.getElementById("address").value;
  let usuario = new User(id, name, lastName, 1, 1, 1, 1, 1, 1);
  console.log(usuario);
}
//carga de usuarios


// carga de libros
// let title = document.getElementById("name").value;
// let description = document.getElementById("lastName").value;
// let date = document.getElementById("type").value;
// let author = document.getElementById("age").value;
// let genere = document.getElementById("country").value;
// let image = document.getElementById("city").value;
// let usuario = new User(id, name, lastName, type, age, country, city, passport, addres);