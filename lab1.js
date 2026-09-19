let name = "Nguyễn Văn An";
let age = 20;
let address = "Hà Nội";
let isStudent = true;

console.log("Họ tên:", name);
console.log("Tuổi:", age);
console.log("Địa chỉ:", address);
console.log("Sinh viên:", isStudent);

// Bài 2

console.log(age);

age = 21;

console.log(age);

// Bài 3

const a = 10;
const b = 5;

console.log("Tổng:", a + b);
console.log("Hiệu:", a - b);
console.log("Tích:", a * b);
console.log("Thương:", a / b);

// Bài 4

function sayHello(name) {
  console.log("Xin chào " + name);
}

sayHello("An");
sayHello("Bình");
sayHello("Cường");

// Bài 5

function sum(a, b) {
  return a + b;
}

const result = sum(10, 20);

console.log(result);

// Bài 6

function calculatorTotal(price, quantity) {
  return price * quantity;
}

const total = calculatorTotal(50000, 3);

console.log(total);

// Bài 7

const math = 8;
const english = 7;
const javascript = 9;

function calculatorAvg(math, english, javascript) {
  return (math + english + javascript) / 3;
}

const average = calculatorAvg(8, 7, 9);

console.log(average); // 8
