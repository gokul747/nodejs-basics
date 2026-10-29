const fs = require("fs");

//fs.writeFile("asynctest.txt", "hello nodejs 2026 async", (err) => {
  //  if (err) throw err;
    //console.log("file written completed");
//});

//console.log("write file processing");

fs.readFile("asynctest.txt",{encoding:"utf-8"},(err,data)=>{
        console.log("read file async:",data);
})