const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

const addNote = (title, body) => {
    const newTitle = title.trim().replace(/ +/g, ' ');

    const notes = getNotes();
    const duplicateNotes = notes.filter(
        (note) => note.title.toLowerCase() == newTitle.toLowerCase()
    );

    if (duplicateNotes.length > 0) {
        console.log(chalk.red(`A note title "${newTitle}" is already taken`));
        return;
    }

    notes.push({
        title: newTitle,
        body,
    });

    saveNotes(notes);
    console.log(chalk.green(`New note added!`));
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const removeNote = (title) => {
    const newTitle = title.trim().replace(/ +/g, ' ');
    const notes = getNotes();

    const updatedNotes = notes.filter(
        (note) => note.title.toLowerCase() !== newTitle.toLowerCase()
    );

    if (notes.length <= updatedNotes.length) {
        console.log(chalk.red(`Note not found!`));
        return;
    }

    saveNotes(updatedNotes);
    console.log(chalk.green(`Note removed!`));
};

module.exports = { getNotes, addNote, removeNote };
