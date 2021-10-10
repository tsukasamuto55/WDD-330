import Animal, { render as test, multiple } from "./math.js";

const animal = new Animal("Kevin", "pig", 5);

console.log(test(animal));

animal.displayAge();
multiple(10, 25);
