var fs = require("fs");
var util = require("util");
var log_file = fs.createWriteStream(__dirname + "/debug.log", { flags: "w" });

export function logger(d: string) {
    log_file.write(util.format(d) + "\n");
}
