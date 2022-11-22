import { Item } from "./item.js";

export class Setting {
  static disableRightClick() {
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault(); 
    }, false);
  }

  static newGame() {
    localStorage.clear();
  }

  static save(name, items) {
    items.forEach(item => {
      localStorage.setItem(name + " | " + item.name, item.quantity);
    });
  }

  static load(name) {
    const items = [];
    for (let i = 0 ; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.split(' | ')[0] === name) {
        const value = ~~localStorage.getItem(key);
        items.push(new Item(key.split(' | ')[1], value));
      }
    }
    return items;
  }
}