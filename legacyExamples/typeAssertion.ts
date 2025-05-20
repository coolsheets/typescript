// let food = {};
// food.price = 5;
// food.name = 'hamburger';

let cheese:string = "mozerella";

interface Food {
    price: number;
    name: string;
    texture?: string;
}
var food = {} as Food;
food.price = 5;
food.name = 'hamburger';
food.texture = "mushy"


let drink = {} as Food;
drink.price = 1.50;
drink.name = "pepsi"

console.log(drink.texture)

