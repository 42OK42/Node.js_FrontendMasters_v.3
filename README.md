# Node.js_FrontendMasters_v.3


# Node.js CLI Notes App

A simple command-line note-taking application built with Node.js, based on the Frontend Masters Node.js v3 course.

## Prerequisites

- Install nvm (Node Version Manager)
- Install Node.js using nvm
- Verify installation with `node --version`

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/42OK42/Node.js_FrontendMasters_v.3.git
cd Node.js_FrontendMasters_v.3
npm install
```

For global installation (to use the `note` command from anywhere):

```bash
npm install -g .
```

## Package Setup

If you're creating this project from scratch:

1. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```

2. Install required dependencies:
   ```bash
   npm install yargs
   ```

3. Make sure your package.json has the following:
   ```json
   {
     "name": "note",
     "bin": {
       "note": "./index.js"
     },
     "type": "module"
   }
   ```

4. Ensure index.js has the shebang line at the top:
   ```javascript
   #!/usr/bin/env node
   ```

5. Make the index.js file executable:
   ```bash
   chmod +x index.js
   ```

## Usage

### Creating Notes

Create a new note with optional tags:

```bash
note new "Your note content" -t tag1,tag2,tag3
```

### Viewing Notes

List all notes:

```bash
note all
```

### Searching Notes

Find notes containing specific text:

```bash
note find "search term"
```

### Deleting Notes

Remove a note by its ID:

```bash
note remove 1234567890
```

### Clean All Notes

Remove all notes from the database:

```bash
note clean
```

## Project Structure

- `index.js` - Entry point with shebang for CLI usage
- `src/command.js` - Command-line interface logic using yargs
- `src/notes.js` - Note management functions
- `src/db.js` - Database operations for JSON file
- `db.json` - JSON file storing notes

## Course Reference

This project was built following the [Frontend Masters Node.js v3 course](https://frontendmasters.com/courses/node-js-v3/).
