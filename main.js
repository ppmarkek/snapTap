const robot = require("robotjs");
const { GlobalKeyboardListener } = require("node-global-key-listener");

let currentButton = null; // Хранит текущее нажатие

const listener = new GlobalKeyboardListener();

listener.addListener((e) => {
  if (e.state === "DOWN") {
    if (e.name === "a" || e.name === "A") {
      if (currentButton !== "a") {
        if (currentButton) {
          robot.keyToggle(currentButton, "up"); // Отпустить предыдущую кнопку
        }
        robot.keyToggle("a", "down"); // Нажать кнопку "a"
        currentButton = "a";
      }
    } else if (e.name === "b" || e.name === "B") {
      if (currentButton !== "b") {
        if (currentButton) {
          robot.keyToggle(currentButton, "up"); // Отпустить предыдущую кнопку
        }
        robot.keyToggle("b", "down"); // Нажать кнопку "b"
        currentButton = "b";
      }
    }
  } else if (e.state === "UP") {
    if ((e.name === "a" || e.name === "A") && currentButton === "a") {
      robot.keyToggle("a", "up"); // Отпустить кнопку "a"
      currentButton = null;
    } else if ((e.name === "b" || e.name === "B") && currentButton === "b") {
      robot.keyToggle("b", "up"); // Отпустить кнопку "b"
      currentButton = null;
    }
  }
});
