
import { Setting } from "./setting.js";
import { Stock } from "./stock.js";
import { Action } from "./action.js";

// Settings
Setting.new_game();
Setting.disable_right_click();

// Init
const actions = document.getElementById("actions");
const stocks = document.getElementById("stocks");

// Display inventory
const inventory = new Stock("inventory");
inventory.items = Setting.load("inventory"); // load local storage
stocks.appendChild(inventory.html);

// Display first button
actions.appendChild((new Action("pick up an acorn", () => {
  inventory.add("acorn", 1);
})).html);

// actions.appendChild((new Action("throw an acorn", () => {
//   inventory.remove("acorn", 1);
// })).html);

actions.appendChild((new Action("walk in the forest", () => {
  inventory.add_random("acorn", 3, 10);
}, 5000)).html);