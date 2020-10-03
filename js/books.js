let books;
let managerStorage;

function init() {
    managerStorage = new LocalStorageManager(localStorage);
    books = [];
}

function createBooks() {
    let id = + 1;
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("date").value;
    let author = document.getElementById("author").value;
    let genere = document.getElementById("genere").value;
    let book = new Book(id, title, description, date, author, genere);
    books.push(book);
    managerStorage.set("books", books);
    mostrar();
}

function mostrar() {
    var books = managerStorage.get('books');
    let tabla = document.getElementById('tabla');
    tabla.innerHTML = ""

    books.map((item, i) => {
        tabla.innerHTML += `<tr>
      <th scope="row">1</th>
      <td>${item.title}</td>
      <td>${item.description}</td>
      <td>${item.date}</td>
      <td>${item.author}</td>
      <td>${item.genere}</td>
      <td class="btn btn-outline-danger" onclick="delete(${i})">Borrar</td>
    </tr>`
    })
}

// function delete(id)
// {

// }