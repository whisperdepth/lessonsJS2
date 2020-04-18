

const test = (a, b) => {
  return a + b;
};

export function saveCalls(func) {
  return function () {
    let calls = [3];
    calls.push([...arguments]);
    return func.apply(this, arguments);
  };
}

const testWithMemory = saveCalls(test);
console.log(testWithMemory(3, 4));
console.log(testWithMemory(7, 2));
console.log(testWithMemory.calls);
