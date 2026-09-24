// Bài 1
const name = "Nguyễn Văn Am";
const age = 20;
const major = "Lập trình web";

console.log(`Xin chào ${name}.
Bạn ${age} tuổi.
Ngành học: ${major}.`);

// Bài 2
const student = {
  id: 1,
  name: "Nguyễn Văn An",
  age: 20,
  major: "Lập trình web",
};

console.log(`Mã sinh viên: ${student.id}
Họ tên: ${student.name}
Tuổi: ${student.age}
Ngành: ${student.major}`);

// Bài 3: Arrow Function

const add = (a, b) => {
  return a + b;
};

// Bài 4

const square = (number) => number * number;

console.log(square(5));

const sum = (a, b) => a + b;

console.log(sum(10, 20));

const sayHello = (name) => `Xin chào ${name}`;

console.log(sayHello("An"));

// Bài 5

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((number) => number * 2);

console.log(newNumbers);
