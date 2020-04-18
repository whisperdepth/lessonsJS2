
export function saveCalls(func) {
  function withMemory(...args) {
    withMemory.calls.push(args);
    return func.apply(this, arguments);
  }
  withMemory.calls = [];
  return withMemory;
}
