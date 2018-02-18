function printHelp() {
	console.log("3.js usage:");
	console.log("");
	console.log("--help              print this help");
	console.log("--file={FILENAME}   which file to load");
	console.log("");
	console.log("");
}

var randomstring = require("randomstring");
var args = require("minimist")(process.argv.slice(2),{ string: "len" });

if ("help" in args || !args.len) {
	printHelp();
	process.exit(1);
}
var a = randomstring.generate({
  length: args.len,
  charset: 'alphabetic'
});


console.log(a);
