export const createLogger = () => {
  let memory = [];

  let warn = (text) =>
    memory.unshift({ message: text, dateTime: new Date(), type: "warn" });

  let error = (text) =>
    memory.unshift({ message: text, dateTime: new Date(), type: "error" });

  let log = (text) =>
    memory.unshift({ message: text, dateTime: new Date(), type: "log" });

  let getRecords = (text) => {
    if (text == "warn") return memory.filter((obj) => obj.type == "warn");
    if (text == "error") return memory.filter((obj) => obj.type == "error");
    if (text == "log") return memory.filter((obj) => obj.type == "log");
    return memory.reverse();
  };

  let object = {
    warn,
    error,
    log,
    memory,
    getRecords,
  };

  return object;
};

/* let logger1 = createLogger();
logger1.warn("hello");
logger1.error("hi");
console.log(logger1.memory);
console.log(logger1.getRecords("warn"));
console.log(logger1.getRecords("error"));

console.log(logger1.getRecords("log"));
console.log(logger1.getRecords()); */