
import { Setting } from "./setting.js";
import { Stock } from "./stock.js";
import { Action } from "./action.js";
import { Storytelling } from "./storytelling.js";

// Settings
Setting.newGame();
Setting.disableRightClick();

// Init
const storytelling = document.getElementById("storytelling");
const actions = document.getElementById("actions");
const stocks = document.getElementById("stocks");

// Display inventory
const inventory = new Stock("inventory");
inventory.items = Setting.load("inventory"); // load local storage
stocks.appendChild(inventory.html);

Storytelling.addNarrative("You are at the edge of a forest.", storytelling);

// Create a new action
const pickUpAcornAction = new Action("pick up an acorn", () => {
  inventory.add("acorn", 1);
});

// Add an event bind to a specific trigger
pickUpAcornAction.addEventOnTrigger(() => {
  return pickUpAcornAction.clickCounter == 1;
}, () => {
  Storytelling.addNarrative("You find an acorn, it may be useful.", storytelling);
});

// Add an event bind to a specific trigger
pickUpAcornAction.addEventOnTrigger(() => {
  return pickUpAcornAction.clickCounter == 15;
}, () => {
  const walkInTheForestAction = new Action("walk in the forest", () => {
    const quantity = inventory.addRandom("acorn", 3, 10);
    Storytelling.addNarrative("You find " + quantity.toString() + " acorns in the undergrowth.", storytelling);
  }, 3000);
  actions.appendChild(walkInTheForestAction.html);
  Storytelling.addNarrative("Looking down, you come across a path.", storytelling);
});

// Display button
actions.appendChild(pickUpAcornAction.html);