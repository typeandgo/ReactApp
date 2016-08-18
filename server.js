var express = require("express");
var path = require("path");
var app = express();

app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/img", express.static(__dirname + "/img"));

app.get("*", function(req, resp) {
  resp.sendFile(path.join(__dirname,'./public/index.html'));
});

app.listen(3000, function() {
  console.log("Listening at port 3000");
});
