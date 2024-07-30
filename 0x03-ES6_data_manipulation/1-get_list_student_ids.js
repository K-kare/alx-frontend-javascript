n
rt default function getListStudentIds(xlistStudents) {
  return Array.isArray(xlistStudents) ? xlistStudents.map(({ id }) => id) : [];
}
