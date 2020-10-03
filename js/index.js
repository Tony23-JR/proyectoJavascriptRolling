let users;
let managerStorage;

function init() {
  managerStorage = new LocalStorageManager(localStorage);
  users = [];
}

function createUser() {
  let id = + 1;
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let type = document.getElementById("type").value;
  let age = document.getElementById("age").value;
  let country = document.getElementById("country").value;
  let city = document.getElementById("city").value;
  let passport = document.getElementById("passport").value;
  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;
  let usuario = new User(id, name, lastName, type, age, country, city, passport, address, email);
  users.push(usuario);
  managerStorage.set("users", users);
  mostrar();
}

function mostrar() {
  var users = managerStorage.get('users');
  let tabla = document.getElementById('tabla');
  tabla.innerHTML = ""

  users.map((item, i) => {
    tabla.innerHTML += `<tr>
      <th scope="row">1</th>
      <td>${item.name}</td>
      <td>${item.lastName}</td>
      <td>${item.type}</td>
      <td>${item.age}</td>
      <td>${item.country}</td>
      <td>${item.city}</td>
      <td>${item.passport}</td>
      <td>${item.address}</td>
      <td>${item.email}</td>
      <td class="btn btn-outline-danger" onclick="borrar(${i})">Borrar</td>
    </tr>`
  })
}
