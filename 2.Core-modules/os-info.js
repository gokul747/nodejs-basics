const os = require('os');

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log(
    "Total Memory:",
    Math.round(os.totalmem() / 1024 ** 3),
    "GB"
);
console.log(
    "Free Memory:",
    Math.round(os.freemem() / 1024 ** 3),
    "GB"
);
console.log("Home Directory:", os.homedir());
console.log("CPU Cores:", os.cpus().length);
console.log("OS Uptime:", os.uptime(), "seconds");