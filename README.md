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
cd nodejs-cli-notes
npm install
```
For global installation of the project, run:

```bash
npm install -g .
```

## Usage

### Create a new note with optional tags

```bash
node index.js --note "This is a note" --tags "work, personal"
```

### Get all notes

```bash
node index.js all
```

### Find notes by content

```bash
node index.js find "content"
```

### Remove a note by ID

```bash
node index.js remove 1234567890
```

### Clean All Notes

```bash
node index.js clean
```

## Project Structure

- `index.js` - Entry point
- `src/command.js` - Command-line interface logic
- `src/notes.js` - Note management functions
- `src/db.js` - Database operations
- `db.json` - JSON file storing notes

## Course Reference

This project was built following the [Frontend Masters Node.js v3 course](https://frontendmasters.com/courses/node-js-v3/).
