function welcome() {
  console.log("Hello World");
}

const arrowWelcome = () => {
  console.log("Inside arrow function.");
  console.log("Hello World");
};

const greet = (name) => {
  console.log(`Hello ${name}`);
};

const add = (num1, num2) => {
  const result = num1 + num2;
  console.log(`Result: ${result}`);
};

add(10, 20);
