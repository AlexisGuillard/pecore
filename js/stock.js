import { Item } from "./item.js";
import { Setting } from "./setting.js";

export class Stock {
  #_items;
  #_html;
  #_name;

  constructor(name) {
    this._name = name;
    this._items = [];
    this._html = document.createElement("div");
    this._html.classList.add("stock");
  }

  get items() {
    return this._items;
  }

  set items(items) {
    this._items = items;
  }

  getItem(name) {
    return this._items.find(item => item.name === name);
  }

  getItemQuantity(name) {
    return this._items.find(item => item.name === name).quantity;
  }

  add(name, quantity) {
    const index = this._items.findIndex(item => item.name === name);
    if (index != -1) {
      this._items[index].add(quantity);
    } else {
      this._items.push(new Item(name, quantity));
      this._items.sort((a, b) => { return a.name > b.name });
    }
    this.update();
  }

  add_random(name, quantity_min, quantity_max) {
    const index = this._items.findIndex(item => item.name === name);
    const quantity = Math.floor(Math.random() * (quantity_max - quantity_min + 1) + quantity_min);
    if (index != -1) {
      this._items[index].add(quantity);
    } else {
      this._items.push(new Item(name, quantity));
      this._items.sort((a, b) => { return a.name > b.name });
    }
    this.update();
  }

  remove(name, quantity) {
    const index = this._items.findIndex(item => item.name === name);
    if (index != -1)
      this._items[index].remove(quantity);
    this.update();
  }

  update() {
    Setting.save(this._name, this._items);
    this._html.style.opacity = 1;
    this._html.innerHTML = "";
    this._items.forEach(item => {
      this._html.innerHTML += "<div class='item'><div class='key'>" + item.name + "</div><div class='quantity'>" + item.quantity + "</div></div>";
    });
  }

  get html() {
    return this._html;
  }
}
