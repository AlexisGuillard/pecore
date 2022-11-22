
export class Item {
  #_name;
  #_quantity;
  
  constructor(name, quantity = 0) {
    this._name = name.toLowerCase();
    this._quantity = quantity;
  }
  
  get name() {
    return this._name;
  }

  get quantity() {
    return this._quantity;
  }

  add(quantity) {
    this._quantity += quantity;
    return this._quantity;
  }

  remove(quantity) {
    this._quantity -= quantity;
    if (this._quantity < 0)
      this._quantity = 0;
    return this._quantity;
  }
}