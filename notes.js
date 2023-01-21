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
    const noteTitle = title.trim().replace(/ +/g, ' ');

    const notes = getNotes();

    const duplicateNotes = notes.find(
        (note) => note.title.toLowerCase() === noteTitle.toLowerCase()
    );

    if (duplicateNotes) {
        console.log(chalk.red(`A note title "${noteTitle}" is already taken`));
        return;
    }

    notes.push({
        title: noteTitle,
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
    const noteTitle = title.trim().replace(/ +/g, ' ');
    const notes = getNotes();

    const updatedNotes = notes.filter(
        (note) => note.title.toLowerCase() !== noteTitle.toLowerCase()
    );

    if (notes.length <= updatedNotes.length) {
        console.log(chalk.red(`Note not found!`));
        return;
    }

    saveNotes(updatedNotes);
    console.log(chalk.green(`Note removed!`));
};

const listNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        notesList = JSON.parse(dataJSON);

        console.log(chalk.magenta.bold('\nYour notes:'));
        notesList.forEach((note) => {
            console.log(`- ${note.title}`);
        });
    } catch (error) {
        console.log(chalk.red('No notes found!'));
    }
};

const readNote = (title) => {
    const noteTitle = title.trim().replace(/ +/g, ' ');

    const notes = getNotes();

    const note = notes.find(
        (note) => note.title.toLowerCase() === noteTitle.toLowerCase()
    );

    if (!note) {
        console.log(chalk.red('Note not found!'));
        return;
    }

    console.log(chalk.magenta.bold('\nTitle:'));
    console.log(chalk.cyan(note.title));
    console.log(chalk.magenta.bold('\nBody:'));
    console.log(chalk.cyan(note.body));
};

const editNote = (title, newTitle, body) => {
    const noteTitle = title ? title.trim().replace(/ +/g, ' ') : '';
    const newNoteTitle = newTitle ? newTitle.trim().replace(/ +/g, ' ') : '';
    const newBody = body ? body.trim().replace(/ +/g, ' ') : '';

    if (!noteTitle) {
        console.log(chalk.red('Please provide a note title to update!'));
        return;
    }

    if (!newNoteTitle && !newBody) {
        console.log(chalk.red('Please provide a new note title or body!'));
        return;
    }

    const notes = getNotes();

    const note = notes.find(
        (note) => note.title.toLowerCase() === noteTitle.toLowerCase()
    );

    if (!note) {
        console.log(chalk.red('Note not found!'));
        return;
    }

    for (let i in notes) {
        if (notes[i].title.toLowerCase() === newNoteTitle.toLowerCase()) {
            console.log(
                chalk.red(`A note title "${newNoteTitle}" is already taken`)
            );
            return;
        }
    }

    for (let j in notes) {
        if (notes[j].title.toLowerCase() === noteTitle.toLowerCase()) {
            if (newNoteTitle) {
                notes[j].title = newNoteTitle;
            }
            if (newBody) {
                notes[j].body = newBody;
            }

            saveNotes(notes);
            console.log(chalk.green('Note updated!'));
            return;
        }
    }
};

module.exports = { listNotes, addNote, removeNote, readNote, editNote };
