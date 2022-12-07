const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
  ];

  // Escreva seu código aqui
//   const [first, second, third] = moreStudents;
//   const student1 = first;
//   const student2 = second[0];
//   const student3 = second[1];
//   const student4 = third[0];
//   const student5 = third[1];

const [student1, [student2, student3 ], [student4, student5]] = moreStudents;



console.log(student1, student2, student3, student4, student5);