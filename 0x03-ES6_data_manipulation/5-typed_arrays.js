export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const intarray = new intarray(length);
  intarray.fill(value, position, position + 1);
  return new DataView(intarray.buffer);
}
