console.log("hello");
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (error) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}


var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => note.title !== title);
    saveNotes(filterNotes);

    return notes.length !== filterNotes.length;
};

module.exports = {
    addNote,
    removeNote
};