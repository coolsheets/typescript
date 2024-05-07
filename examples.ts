// Example 1
declare var fruit1: { howMany: number; colour: string; whoEats: string[]; };


// Example 2: interfaces
interface Fruit {
    howMany: number; 
    colour: string; 
    whoEats?: string[];
}
declare var fruit2: Fruit;

fruit2.howMany=4;


// Example 3: Optional properties
interface Fruit {
    howMany: number; 
    colour: string; 
    whoEats?: string[];
}

function createFruit(config: Fruit) {
    let newFruit=config;
    if (config.howMany) {
        newFruit.whoEats = ["humans", "monke"];
    }
    return newFruit;
  }
   
let myFruit = createFruit({ howMany: 5, colour: "yellow" });


// Example 4: Alias
type BossName = string;
type Attacks = string[];
type Health = number;
type SoulsDropped = number;
type ItemDrops = string[];
type Quote = {
    fightBegin: String,
    halfHealth: String | null,
    finalWords?: Number
}

type BossFight = {
    name: BossName,
    attacks: Attacks,
    health: Health,
    souls: SoulsDropped,
    items?: ItemDrops,
    quote?: Quote
  }

let eldenBeast:BossFight = {
    name : "Elden Beast",
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
