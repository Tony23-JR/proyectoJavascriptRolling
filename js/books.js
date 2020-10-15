let books;
let managerStorageBook;

function initBook() {
  managerStorageBook = new LocalStorageManager(localStorage);
  books = [];
  mostrar();
}

function logout() {
  managerStorageBook.set("logins", []);
  document.location.href = "../html/index.html";
  //location.reload();
}

function mostrarBooks() {
  let loginOk = managerStorageBook.get("logins");
  managerStorageBook.set("action", []);
  managerStorageBook.set("action", ["../html/book.html"]);
  if (loginOk.length === 0) {
    document.location.href = "../html/login.html";
  }
  if (loginOk[0].logok) {
    document.location.href = "../html/book.html";
  } else {
    document.location.href = "../html/login.html";
  }
}

function mostrarUsers() {
  let loginOk = managerStorageBook.get("logins");
  managerStorageBook.set("action", []);
  managerStorageBook.set("action", ["../html/user.html"]);
  if (loginOk.length === 0) {
    document.location.href = "../html/login.html";
  }
  if (loginOk[0].logok) {
    document.location.href = "../html/user.html";
  } else {
    document.location.href = "../html/login.html";
  }
}

function createBook() {
  let id = +1;
  let title = document.getElementById("title").value;
  let image = document.getElementById("input").files[0].name;
  let description = document.getElementById("description").value;
  let date = document.getElementById("date").value;
  let author = document.getElementById("author").value;
  let genere = document.getElementById("genere").value;
  let book = new Book(id, title, image, description, date, author, genere);
  books.push(book);
  managerStorageBook.set("books", books);
  mostrar();
}

function handleSubmit(event) {
  event.preventDefault();
  createBook();
  document.getElementById("title").value = "";
  document.getElementById("input").value = "";
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
  document.getElementById("author").value = "";
  document.getElementById("genere").value = "";
  mostrar();
  title.classList = "form-control";
  input.classList = "form-control";
  description.classList = "form-control";
  date.classList = "form-control";
  author.classList = "form-control";
  genere.classList = "form-control";
}

function controls() {
  if (title.value == "") {
    title.classList = "form-control is-invalid";
  } else {
    title.classList = "form-control is-valid";
  }
  if (input.value == "") {
    input.classList = "form-control is-invalid";
  } else {
    input.classList = "form-control is-valid";
  }
  if (description.value == "") {
    description.classList = "form-control is-invalid";
  } else {
    description.classList = "form-control is-valid";
  }
  if (date.value == "") {
    date.classList = "form-control is-invalid";
  } else {
    date.classList = "form-control is-valid";
  }
  if (author.value == "") {
    author.classList = "form-control is-invalid";
  } else {
    author.classList = "form-control is-valid";
  }
  if (genere.value == "") {
    genere.classList = "form-control is-invalid";
  } else {
    genere.classList = "form-control is-valid";
  }
}

function borrar(i) {
  var books = managerStorageBook.get("books");
  books.splice(i, 1);
  managerStorageBook.set("books", books);
  mostrar();
  location.reload();
}

function editar(i) {
  var books = managerStorageBook.get("books");
  for (let i = 0; i < books.length; i++) {
    books[i].title = document.getElementById("titleEdit").value;
    books[i].input = document.getElementById("inputEdit").files[0].name;
    books[i].description = document.getElementById("descriptionEdit").value;
    books[i].date = document.getElementById("dateEdit").value;
    books[i].author = document.getElementById("authorEdit").value;
    books[i].genere = document.getElementById("genereEdit").value;
  }
  managerStorageBook.set("books", books);
  mostrar();
  location.reload();
}

function mostrar() {
  var books = managerStorageBook.get("books");
  let tabla = document.getElementById("tabla");
  tabla.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    let title = books[i].title;
    let image = books[i].image;
    let description = books[i].description;
    let date = books[i].date;
    let author = books[i].author;
    let genere = books[i].genere;

    tabla.innerHTML += `
        <tr>
        <th scope="row">1</th>
        <td>${title}</td>
        <td><img src="../images/books/${image}" id="" width="100" height="100" /></td>
        <td>${description}</td>
        <td>${date}</td>
        <td>${author}</td>
        <td>${genere}</td>
        <td>
       <a href="#editBookModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Editar">&#xE254;</i></a>
       <a href="#deleteBookeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
      </td>
      </tr>
     <div id="deleteBookeModal" class="modal fade">
  <div class="modal-dialog">
   <div class="modal-content">
    <form>
     <div class="modal-header">
      <h4 class="modal-title">Eliminar libro</h4>
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
     </div>
     <div class="modal-body">
      <p>¿Está seguro de que desea eliminar este Libro?</p>
      <p class="text-warning"><small>Esta acción no se puede deshacer.</small></p>
     </div>
     <div class="modal-footer" id="eliminar">
       <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar">
       <input type="button" class="btn btn-danger" onclick="borrar(${i})" value="Borrar">
       </div>
    </form>
   </div>
   </div>
 </div> 
     <div id="editBookModal" class="modal fade">
  <div class="modal-dialog">
   <div class="modal-content">
    <form>
     <div class="modal-header">      
      <h4 class="modal-title">Modificar libro</h4>
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
     </div>
     <div class="modal-body">
     <div class="form-group">
     <label for="title">Titulo</label>
     <input type="text" class="form-control" id="titleEdit" value="${title}" 
     required onchange="controls()">
   </div>
   <div class="form-group">
     <label for="image">Imagen</label>
     <input type="file" class="form-control"  id="inputEdit" required onchange="controls()">
   </div>
   <div class="form-group">
     <label for="description">Descripcion</label>
     <textarea class="form-control" id="descriptionEdit" required 
     onchange="controls()">${description}</textarea>
   </div>
   <div class="form-group">
     <label for="date">Fecha de Publicacion</label>
     <input type="date" class="form-control" id="dateEdit" value="${date}" 
     required onchange="controls()">
   </div>    
   <div class="form-group">
     <label for="author">Autor</label>
     <input type="text" class="form-control" id="authorEdit" value="${author}" 
     required onchange="controls()">
   </div> 
   <label for="genere">Genero</label>
   <select class="custom-select" id="genereEdit" value="${genere}" 
   required onchange="controls()">
       <option>Novela</option>
       <option>Novela corta</option>
       <option>Terror</option>
       <option>Juvenil</option>
       <option>Aventuras</option>
       <option>Romántica</option>
       <option>Histórica</option>
       <option>Ciencia ficción</option>
       <option>Policíaca</option>
       <option>Relato corto</option>
   </select>
   <div id="validationServer04Feedback">
       Seleccione una genero.
   </div>    
     </div>
     <div class="modal-footer">
     <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar">
     <input type="button" class="btn btn-info" onclick="editar(${i})" value="Guardar">
     </div>
    </form>
   </div>
  </div>
 </div>
     `;
  }
}
