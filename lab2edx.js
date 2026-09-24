// Bài 1
{
  const names = ["An", "Bình", "Nam", "Hòa", "Lan"];
  console.log(names);
  console.log(names[0]);
  console.log(names[names.length - 1]);
  console.log(names.length);
  names.push("Minh");
  names.pop();
}

// Bài 2
{
  const names = ["An", "Bình", "Nam", "Hòa", "Lan"];
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

// Bài 3
{
  const student = {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
    email: "an@gmail.com",
    major: "CNTT",
  };

  console.log(student);
  console.log(student.name);
  console.log(student.age);
  console.log(student.email);

  student.age = 21;
  student.phone = "0123456789";
  console.log(student);
}

// Bài 4
{
  const students = [
    { id: 1, name: "Nguyễn Văn An", age: 20 },
    { id: 2, name: "Trần Văn Bình", age: 21 },
    { id: 3, name: "Lê Văn Nam", age: 20 },
  ];

  console.log(students);
  console.log(students[0].name);
  console.log(students[1].age);

  for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
  }
}

// Bài 5 – Hiển thị danh sách lên HTML
{
  const students = [
    {
      id: 1,
      name: "Nguyễn Văn An",
      age: 20,
    },
    {
      id: 2,
      name: "Trần Văn Bình",
      age: 21,
    },
    {
      id: 3,
      name: "Lê Văn Nam",
      age: 20,
    },
  ];

  const tbody = document.getElementById("students");

  tbody.innerHTML = students
    .map(
      (student) => `
        <tr class="hover:bg-gray-50">
          <td class="px-4 py-2 border border-gray-300">${student.id}</td>
          <td class="px-4 py-2 border border-gray-300">${student.name}</td>
          <td class="px-4 py-2 border border-gray-300">${student.age}</td>
          <td class="px-4 py-2 border border-gray-300">
            <div class="flex items-center justify-center gap-2">
              <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Edit</a>
              <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </td>
        </tr>
      `,
    )
    .join("");
}

// Bài 27 – Bài tập tổng hợp
{
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 20000000,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 18000000,
    },
    {
      id: 3,
      name: "Xiaomi 14",
      price: 12000000,
    },
  ];

  console.log("Bài 27 - Bước 1: Danh sách sản phẩm");
  console.log(products);

  console.log("Bước 2 + 3: Duyệt bằng for");
  for (let i = 0; i < products.length; i++) {
    console.log(`${products[i].name} - ${products[i].price}`);
  }

  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price;
  }
  console.log("Bước 4: Tổng giá ");
  console.log("Tổng giá:", total);

  const productsEl = document.getElementById("products");

  productsEl.innerHTML = products
    .map(
      (product) => `
<p>
          ${product.name}<br>
          Giá: ${product.price}
        </p>
      `,
    )
    .join("");
}
