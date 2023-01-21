const yargs = require('yargs');
const {
    listNotes,
    addNote,
    removeNote,
    readNote,
    editNote,
} = require('./notes');

// Cerate add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string',
        },
    },
    handler: ({ title, body }) => {
        addNote(title, body);
    },
});

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the note to be removed',
            demandOption: true,
            type: 'string',
        },
    },
    handler: ({ title }) => {
        removeNote(title);
    },
});

// create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        listNotes();
    },
});

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of the note to be read',
            demandOption: true,
            type: 'string',
        },
    },
    handler: ({ title }) => {
        readNote(title);
    },
});

// create edit command
yargs.command({
    command: 'edit',
    describe: 'Edit a note',
    builder: {
        title: {
            describe: 'Title of the note to be edited',
            demandOption: true,
            type: 'string',
        },
        newTitle: {
            describe: 'New title of the note',
            demandOption: false,
            type: 'string',
        },
        body: {
            describe: 'New body of the note',
            demandOption: false,
            type: 'string',
        },
    },
    handler: ({ title, newTitle, body }) => {
        editNote(title, newTitle, body);
    },
});

yargs.parse();
