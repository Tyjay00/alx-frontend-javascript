export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // No need to redeclare; just assign a new value
    task2 = false; // No need to redeclare; just assign a new value
  }

  return [task, task2];
}
