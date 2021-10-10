export default class Animal {
  constructor(name, type, age) {
    (this.name = name), (this.type = type), (this.age = age);
  }
  displayAge() {
    const div = document.createElement("div");
    div.innerHTML = `${this.name} is ${this.age} year old.`;
    output.append(div);
  }
}

const output = document.querySelector(".output");

export function render(user) {
  output.innerHTML = `This animal is a ${user.type}, and its name is ${user.name}.`;
}

export function multiple(x, y) {
  const div = document.createElement("div");
  div.innerText = `${x} * ${y} = ${x * y}`;
  output.append(div);
}
