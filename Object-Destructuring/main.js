const employee = {
  firstName: "Job",
  lastName: "Offer",
  position: "Software Developer",
  yearHired: 1954,
  family: {
    fatherName: "Jon",
  },
};

let { firstName, lastName, position, yearHired } = employee;
console.log(firstName, lastName, position, yearHired); // Job Offer Software Developer 1954

let { firstName: fName, lastName: lName } = employee;
console.log(fName, lName); // Job Offer

let { age = 3 } = employee;
console.log(age); // 3

let {
  family: { fatherName },
} = employee;
console.log(fatherName); // Jon
