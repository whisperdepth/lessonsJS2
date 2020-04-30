const students = [
  { name: "Tom", birthDate: "01/19/2010" },
  { name: "Ben", birthDate: "01/17/2008" },
  { name: "Sam", birthDate: "03/15/2010" },
];


export function studentsBirthDays(students) {
  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
  });

  const obj = students.reduce((acc, student) => {
    const month = formatter.format(new Date(student.birthDate));
    return {
      ...acc,
      [month]: acc[month] ? acc[month].concat(student) : [student],
    };
  }, {});

  for (let key in obj) {
    obj[key].sort(
      (a, b) =>
        new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate()
    );
  }

  for (let key in obj) {
    obj[key] = obj[key].map((student) => student.name);
  }

  return obj;
}
