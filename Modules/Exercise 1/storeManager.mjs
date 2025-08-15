import {addItem, removeItem, listItems} from "./inventory.mjs";

addItem("Apple");
addItem("Milk");
addItem("Egg");
addItem("Iced Tea");
addItem("Corn");
listItems();

removeItem("Egg");
removeItem("Apple");
listItems();
