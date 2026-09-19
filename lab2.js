// Bài 1: Array cơ bản Tạo Array

const names = ["An", "Bình", "Nam", "Hòa", "Lan"];

console.log(names);
console.log(names[0]);
console.log(names[names.length - 1]);
console.log(names.length);

names.push("Minh");
console.log(names);

names.pop();
console.log(names);

// Bài 2: Duyệt Array

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// Bài 3: Tạo Object
const student = {
  id: 1,
  name: "Nguyễn Văn An",
  age: 20,
  email: "an@gmail.com",
  major: "CNTT",
};

// Bài 4: Array Object

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.email);

student.age = 21;
student.phone = "0901234567";

console.log(student);
