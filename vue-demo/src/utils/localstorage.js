import Cookies from 'js-cookie'

class LocalStore {
  constructor() {
    this.isLocalStorageEnabled = isLocalStorageEnabled();
  }
  get(key) {
    let value;
    if (this.islocalStorageEnabled) {
      value = window.localStorage.getItem(key);
    } else {
      value = Cookies.get(key);
    }
    if (!value) return null;
    try {
      value = JSON.parse(value);
    } catch (e) { }
    return value;
  }

  set(key, value) {
    if (this.islocalStorageEnabled) {
      if (typeof value === "undefined") return undefined;
      if (typeof value === "number" || typeof value === "string") {
        window.localStorage.setItem(key, value);
      } else {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } else {
      if (typeof value === "undefined") return undefined;
      if (typeof value === "number" || typeof value === "string") {
        Cookies.set(key, value);
      } else {
        Cookies.set(key, JSON.stringify(value));
      }
    }
  }

  clear(key) {
    if (this.islocalStorageEnabled) {
      window.localStorage.removeItem(key);
    } else {
      Cookies.remove(key);
    }
  }

  remove(key) {
    this.clear(key);
  }
}

function isLocalStorageEnabled() {
  try {
    window.localStorage.setItem("__testItem__", "_test");
    window.localStorage.removeItem("__testItem__");
    return true;
  } catch (e) {
    return false;
  }
}

export default new LocalStore();