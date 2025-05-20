"use strict";
fruit2.howMany = 4;
function createFruit(config) {
    let newFruit = config;
    if (config.howMany) {
        newFruit.whoEats = ["humans", "monke"];
    }
    return newFruit;
}
let myFruit = createFruit({ howMany: 5, colour: "yellow" });
let eldenBeast = {
    name: "Elden Beast",
    attacks: [
        "disks of light",
        "slash",
        "that one annoying attack with all the lightning"
    ],
    health: 999,
    souls: 20000,
    items: ["trophies", "bananas"],
    quote: {
        fightBegin: "hahahaha fool!",
        halfHealth: null,
        finalWords: 3
    }
};
