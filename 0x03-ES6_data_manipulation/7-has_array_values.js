export default function hasValuesFromArray(set, arrray) {
  return arrray.every((ele) => set.has(ele));
}
