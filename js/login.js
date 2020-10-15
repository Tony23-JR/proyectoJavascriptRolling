let logins;
let managerStorageLogin;

function initLogin() {
  managerStorageLogin = new LocalStorageManager(localStorage);
  logins = [];
}

function validarUsuario() {
  let usersLogin = managerStorageLogin.get("users");
  let email = document.getElementById("user").value;
  let password = document.getElementById("password").value;
  for (let i = 0; i < usersLogin.length; i++) {
    if (
      (usersLogin[i].email == email) &
      (usersLogin[i].password == password) &
      (usersLogin[i].type == "Administrador")
    ) {
      let logok = true;
      let login = new Login(email, password, logok);
      logins.push(login);
      managerStorageLogin.set("logins", logins);
      let action = managerStorageLogin.get("action");
      if (action.length === 0) {
        document.location.href = "../html/user.html";
      }
      document.location.href = action[0];
    }
  }
}
