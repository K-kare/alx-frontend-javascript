export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((previous, { id }) => previous + id, 0);
}
