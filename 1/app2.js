const fs = require('fs');

var notes = {
    title: 'some text',
    body: 'some body'
};

var noteString = JSON.stringify(notes);
fs.writeFileSync('notes.json', noteString);


var noteStr = fs.readFileSync('notes.json');
var note = JSON.parse(noteStr);
console.log(note.title);
