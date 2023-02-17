const fs = require("fs");

fs.readFile("./homework.log", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }

  fs.writeFile("log.txt", data, "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("successfully write log file");
  });

  console.log("log:", data);
});
