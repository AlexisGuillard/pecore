
import { Setting } from "./setting.js";
import { Stock } from "./stock.js";
import { Action } from "./action.js";

// Settings
Setting.newGame();
Setting.disableRightClick();

// Init
const actions = document.getElementById("actions");
const stocks = document.getElementById("stocks");

// Display inventory
const inventory = new Stock("inventory");
inventory.items = Setting.load("inventory"); // load local storage
stocks.appendChild(inventory.html);

// Create a new action
const pickUpAcornAction = new Action("pick up an acorn", () => {
  inventory.add("acorn", 1);
});

// Add an event bind to a specific trigger
pickUpAcornAction.addEventOnTrigger(() => {
  return pickUpAcornAction.clickCounter == 10;
}, () => {
  const walkInTheForestAction = new Action("walk in the forest", () => {
    inventory.add_random("acorn", 3, 10);
  }, 5000);
  actions.appendChild(walkInTheForestAction.html);
});

// Display button
actions.appendChild(pickUpAcornAction.html);