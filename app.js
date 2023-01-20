const yargs = require('yargs');
const { listNotes, addNote, removeNote } = require('./notes');

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
    handler: () => {
        console.log('Reading a note');
    },
});

yargs.parse();
