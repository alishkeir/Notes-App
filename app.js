const yargs = require('yargs');

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
        console.log(title);
        console.log(body);
    },
});

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing a note');
    },
});

// create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        console.log('Listing all notes');
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
