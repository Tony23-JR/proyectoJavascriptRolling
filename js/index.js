let managerStorageIndex;

function initIndex() {
  managerStorageIndex = new LocalStorageManager(localStorage);
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
  managerStorageIndex.set("action", ["../html/users.html"]);
  if (loginOk.length === 0) {
    document.location.href = "../html/login.html";
  }
  if (loginOk[0].logok) {
    document.location.href = "../html/users.html";
  } else {
    document.location.href = "../html/login.html";
  }
}

function logout() {
  managerStorageIndex.set("logins", []);
  location.reload();
}
