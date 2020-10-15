let users;
let managerStorageUser;

function initUser() {
  managerStorageUser = new LocalStorageManager(localStorage);
  users = [];
  mostrar();
}

function logout() {
  managerStorageUser.set("logins", []);
  document.location.href = "../html/index.html";
}

function mostrarBooks() {
    let loginOk = managerStorageUser.get("logins");
    managerStorageUser.set("action", []);
    managerStorageUser.set("action", ["../html/book.html"]);
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
    let loginOk = managerStorageUser.get("logins");
    managerStorageUser.set("action", []);
    managerStorageUser.set("action", ["../html/user.html"]);
    if (loginOk.length === 0) {
      document.location.href = "../html/login.html";
    }
    if (loginOk[0].logok) {
      document.location.href = "../html/user.html";
    } else {
      document.location.href = "../html/login.html";
    }
  }

function createUser() {
  let id = +1;
  let name = document.getElementById("name").value;
  let type = document.getElementById("type").value;
  let state = document.getElementById("state").value;
  let passport = document.getElementById("passport").value;
  let age = document.getElementById("age").value;
  let country = document.getElementById("country").value;
  let city = document.getElementById("city").value;
  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let usuario = new User(
    id,
    name,
    type,
    state,
    passport,
    age,
    country,
    city,
    address,
    email,
    password
  );
  users.push(usuario);
  managerStorageIndex.set("users", users);
  mostrar();
}

function handleSubmit(event) {
  event.preventDefault();
  createUser();
  document.getElementById("name").value = "";
  document.getElementById("type").value = "";
  document.getElementById("state").value = "";
  document.getElementById("passport").value = "";
  document.getElementById("age").value = "";
  document.getElementById("country").value = "";
  document.getElementById("city").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  mostrar();
  name.classList = "form-control";
  type.classList = "form-control";
  state.classList = "form-control";
  passport.classList = "form-control";
  age.classList = "form-control";
  country.classList = "form-control";
  city.classList = "form-control";
  address.classList = "form-control";
  email.classList = "form-control";
  password.classList = "form-control";
}

function controls() {
  if (name.value == "") {
    name.classList = "form-control is-invalid";
  } else {
    name.classList = "form-control is-valid";
  }
  if (type.value == "") {
    type.classList = "form-control is-invalid";
  } else {
    type.classList = "form-control is-valid";
  }
  if (state.value == "") {
    state.classList = "form-control is-invalid";
  } else {
    state.classList = "form-control is-valid";
  }
  if (passport.value == "") {
    passport.classList = "form-control is-invalid";
  } else {
    passport.classList = "form-control is-valid";
  }
  if (age.value == "") {
    age.classList = "form-control is-invalid";
  } else {
    age.classList = "form-control is-valid";
  }
  if (country.value == "") {
    country.classList = "form-control is-invalid";
  } else {
    country.classList = "form-control is-valid";
  }
  if (city.value == "") {
    cityclassList = "form-control is-invalid";
  } else {
    city.classList = "form-control is-valid";
  }
  if (address.value == "") {
    address.classList = "form-control is-invalid";
  } else {
    address.classList = "form-control is-valid";
  }
  if (email.value == "") {
    email.classList = "form-control is-invalid";
  } else {
    email.classList = "form-control is-valid";
  }
  if (password.value == "") {
    password.classList = "form-control is-invalid";
  } else {
    password.classList = "form-control is-valid";
  }
}

function borrar(i) {
  var users = managerStorageUser.get("users");
  users.splice(i, 1);
  managerStorageIndex.set("users", users);
  mostrar();
  location.reload();
}

function editar(i) {
  var users = managerStorageUser.get("users");
  for (let i = 0; i < users.length; i++) {
    users[i].name = document.getElementById("nameEdit").value;
    users[i].type = document.getElementById("typeEdit").value;
    users[i].state = document.getElementById("stateEdit").value;
    users[i].passport = document.getElementById("passportEdit").value;
    users[i].age = document.getElementById("ageEdit").value;
    users[i].country = document.getElementById("countryEdit").value;
    users[i].city = document.getElementById("cityEdit").value;
    users[i].adress = document.getElementById("addressEdit").value;
    users[i].email = document.getElementById("emailEdit").value;
    users[i].password = document.getElementById("passwordEdit").value;
  }
  managerStorageUser.set("users", users);
  mostrar();
  location.reload();
}

function mostrar() {
  var users = managerStorageUser.get("users");
  let tabla = document.getElementById("tabla");
  tabla.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    let name = users[i].name;
    let type = users[i].type;
    let state = users[i].state;
    let passport = users[i].passport;
    let age = users[i].age;
    let country = users[i].country;
    let city = users[i].city;
    let address = users[i].address;
    let email = users[i].email;
    let password = users[i].password;

    tabla.innerHTML += `
        <tr>
        <th scope="row">1</th>
        <td>${name}</td>
        <td>${type}</td>
        <td>${state}</td>
        <td>${passport}</td>
        <td>${age}</td>
        <td>${country}</td>
        <td>${city}</td>
        <td>${address}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>
       <a href="#editUserModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Editar">&#xE254;</i></a>
       <a href="#deleteUserModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
      </td>
      </tr>
     <div id="deleteUserModal" class="modal fade">
     <div class="modal-dialog">
     <div class="modal-content">
    <form>
     <div class="modal-header">
      <h4 class="modal-title">Eliminar usuario</h4>
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
     </div>
     <div class="modal-body">
      <p>¿Está seguro de que desea eliminar este Usuario?</p>
      <p class="text-warning"><small>Esta acción no se puede deshacer.</small></p>
     </div>
     <div class="modal-footer">
       <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar">
       <input type="button" class="btn btn-danger" onclick="borrar(${i})" value="Borrar">
       </div>
    </form>
     </div>
     </div>
     </div> 
     <div id="editUserModal" class="modal fade">
  <div class="modal-dialog">
   <div class="modal-content">
    <form>
     <div class="modal-header">      
      <h4 class="modal-title">Modificar Usuario</h4>
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
     </div>
     <div class="modal-body">
     <div class="form-group">
     <label for="name">Nombre</label>
     <input type="text" class="form-control" id="nameEdit" value="${name}" required onchange="controls()">
   </div>
   <div class="form-group">
   <label for="type">Tipo de usuario</label>
                    <select class="custom-select" id="typeEdit" value="${type}" placeholder="Administrador" required>
                        <option>Administrador</option>
                        <option>Cliente</option>
                    </select>
   </div>
   <div class="form-group">
   <label for="state">Estado</label>
                    <select class="custom-select" id="stateEdit" value="${state}" placeholder="Administrador" required>
                        <option>Activo</option>
                        <option>Bloqueado</option>
                    </select>
   </div>   
   <div class="form-group">
      <label for="passport">DNI</label>
      <input type="number" class="form-control" id="passportEdit" value="${passport}" required onchange="controls()">
    </div> 
    <div class="form-group">
     <label for="age">Edad</label>
     <input type="number" class="form-control" id="ageEdit" value="${age}" required onchange="controls()">
   </div> 
   <div class="form-group">
     <label for="country">Pais</label>
     <input type="text" class="form-control" id="countryEdit" value="${country}" required onchange="controls()">
   </div> 
   <div class="form-group">
   <label for="city">Provincia</label>
                    <select class="custom-select" id="cityEdit" placeholder="Tucumán" required>
                        <option>Buenos Aires</option>
                        <option>Tierra del Fuego</option>
                        <option>Catamara</option>
                        <option>Córdoba</option>
                        <option>Corrientes</option>
                        <option>Entre Ríos</option>
                        <option>Jujuy</option>
                        <option>Mendoza</option>
                        <option>La Rioja</option>
                        <option>Salta</option>
                        <option>San Juan</option>
                        <option>San Luis</option>
                        <option>Santa Fe</option>
                        <option>Santiago del Estero</option>
                        <option>Tucumán</option>
                        <option>Chaco</option>
                        <option>Chubut</option>
                        <option>Formosa </option>
                        <option>Misiones</option>
                        <option>Neuquén</option>
                        <option>La Pampa</option>
                        <option>Río Negro</option>
                        <option>Santa Cruz</option>
                    </select>
                    <div id="validationServer04Feedback">
                        Seleccione una provincia.
                    </div>
   </div>
   <div class="form-group">
   <label for="address">Domicilio</label>
   <input type="text" class="form-control" id="addressEdit" value="${address}" required onchange="controls()">
   </div> 
   <div class="form-group">
     <label for="email">Email</label>
     <input type="email" class="form-control" id="emailEdit" value="${email}" required onchange="controls()">
   </div> 
  <div class="form-group">
     <label for="password">Contraseña</label>
     <input type="password" class="form-control" id="passwordEdit" value="${password}" required onchange="controls()">
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