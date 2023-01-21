# Notes App

### Simple CLI Notes Application built using Nodejs

### How to use:

 - **To add a note**
	 - `node app.js add --title "<your note title>" --body "<your note body>"`
 - **To delete a note** 
	 - `node app.js remove --title "<your note title>"`
 - **To list al notes**
	 - `node app.js list`
 - **To read a note**
	 - `node app.js read --title "<your note title>"`
 - **To edit a note** (you can update a note title, body, or both)
	 - `node app.js edit --title "<your old note title>" --body "<your new note body>"`
	 - `node app.js edit --title "<your old note title>" --newTitle "<your new note title>"`
	 - `node app.js edit --title "<your old note title>" --newTitle "<your new note title>" --body "<your new note body>"`
