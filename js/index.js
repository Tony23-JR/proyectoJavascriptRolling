let managerStorageIndex;

function initIndex() {
  managerStorageIndex = new LocalStorageManager(localStorage);
  mostrar();
}

function mostrarBooks() {
  let loginOk = managerStorageIndex.get("logins");
  managerStorageIndex.set("action", []);
  managerStorageIndex.set("action", ["../html/book.html"]);
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
  let loginOk = managerStorageIndex.get("logins");
  managerStorageIndex.set("action", []);
  managerStorageIndex.set("action", ["../html/user.html"]);
  if (loginOk.length === 0) {
    document.location.href = "../html/login.html";
  }
  if (loginOk[0].logok) {
    document.location.href = "../html/user.html";
  } else {
    document.location.href = "../html/login.html";
  }
}

function logout() {
  managerStorageIndex.set("logins", []);
  location.reload();
}

function mostrar() {
  var books = managerStorageIndex.get("books");
  console.log("A veces Pasa", books);
  let mostrarCards = document.getElementById("mostrarCards");
  mostrarCards.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    let title = books[i].title;
    let image = books[i].image;
    let description = books[i].description;
    let date = books[i].date;
    let author = books[i].author;
    let genere = books[i].genere;

    mostrarCards.innerHTML += `
      <div class="row">
         <div class="col-12 col-md-6 col-lg-4 mb-4">
           <div class="card">
              <img class="card-img-top" src="../images/books/${image}" alt="Card image cap">
             <div class="card-body">
                <h5 class="card-title">Titulo: ${title}</h5>
                <h5 class="card-title">Autor: ${author}  Fecha Creacion: ${date}</h5>
                <h5 class="card-title">Fecha Creacion: ${date}</h5>
               <p class="card-text">${description}</p>
             </div>
           </div>
         </div> 
  </div> 
   `;
  }
}
