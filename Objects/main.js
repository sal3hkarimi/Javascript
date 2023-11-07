/**
 * Object without prototype and custom prototype
 * **/

// const student = Object.create(null);
const student = Object.create({ creator: "sal3h" });
student.user = { name: "mohammad" };
console.log(student); // {user: { name: "mohammad" }}
console.log(student.__proto__); // {creator: 'sal3h'}
