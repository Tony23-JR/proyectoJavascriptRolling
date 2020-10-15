class LocalStorageManager {
  _localStorage;

  constructor(localStorage) {
    this._localStorage = localStorage;
  }

  get(keyStorage) {
    let users = JSON.parse(this._localStorage.getItem(keyStorage)) || [];
    return users;
  }

  set(keyStorage, models) {
    this._localStorage.setItem(keyStorage, JSON.stringify(models));
  }
}
