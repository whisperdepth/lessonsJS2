const students = [
  { name: "Tom", birthDate: "01/15/2010" },
  { name: "Ben", birthDate: "01/17/2008" },
  { name: "Sam", birthDate: "03/15/2010" },
];

export function studentsBirthDays(students) {

  

  let obj = {
    Jan: [],
    Mar: [],
  };
  students.forEach((student) => {
    if (student.birthDate.startsWith("01/")) {
      obj.Jan.push(student.name);
    } else {
      obj.Mar.push(student.name);
    }
  });
 return obj;
}
/*  console.log(studentsBirthDays(students)); */

