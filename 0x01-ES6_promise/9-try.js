export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (f) {
    queue.push(f.toString());
  }
  queue.push('Guardrail was processed');
  return queue;
}
