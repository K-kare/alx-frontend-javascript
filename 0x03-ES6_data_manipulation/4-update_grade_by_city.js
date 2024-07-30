export default function updateStudentGradeByCity(listStudents, newLocation, newGrades) {
  return listStudents
    .filter(({ location }) => location === newLocation)
    .map((obj) => {
      const targetNewGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
      const { grade = 'N/A' } = targetNewGrade.length > 0 ? targetNewGrade[0] : {};
      return { ...obj, grade };
    });
}
