let message = "Just learn it!";

export function sendMessage(name) {
  let message = "Just learn it!";
  const sender = "Gromcode";
  console.log(`${name}, ${message} Your ${sender}`);
}

export function setMessage(text) {
  message = text;
}
