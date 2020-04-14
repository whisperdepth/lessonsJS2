var foo = 1;

function bar() {
  if (!foo) {
    let foo = 10;
  }

  return foo;
}

export default foo = bar();
