console.log("Starting app");
const fs = require("fs");
const os = require("os");
const notes = require("./notes");
const yargs = require("yargs");
const _ = require("lodash");

console.log(_.isString("hello"));

// var user = os.userInfo();

// fs.appendFile('greet.txt', `hello ${user.username} youre ${notes.age}! ` , function (err) {
//     if (err) {
//         console.log(err);
//     } 
//     notes.addNotes();
// });


const argv = yargs.argv;
console.log(argv);

var command = process.argv[2];

if (command === 'add') {
    console.log("add new style");
    var note = notes.addNote(argv.title, argv.body);
    if(_.isUndefined(note)) {
        console.log("Duplicate Note!");
    } else {
        console.log("Note added! ", note.title);
    }
} else if (command === 'list') {
    console.log(" listing add notes");
} else if (command === 'read') {
    console.log("Reading notes");
} else if ( command === 'remove'){
    console.log("remove called");
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'note was removed ' : 'Note not fould';
    console.log(message);
} else {
    console.log("command not recognized");
}

//console.log(process.argv);