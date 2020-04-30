const students = [
  { name: "Tom", birthDate: "01/15/2010" },
  { name: "Ben", birthDate: "01/17/2008" },
  { name: "Sam", birthDate: "03/15/2010" },
];

export function studentsBirthDays(students) {
  const obj = {};
  const studentsDate = students.map(
    (student) => (student.birthDate = new Date(student.birthDate))
  );

  return studentsDate;
}
console.log(studentsBirthDays(students));

const students2 = [
  { name: "Tom", birthDate: new Date("01/15/2010") },
  { name: "Ben", birthDate: new Date("01/17/2008") },
  { name: "Sam", birthDate: new Date("03/15/2010") },
];

console.log(students2);
