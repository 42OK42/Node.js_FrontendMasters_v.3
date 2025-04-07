#!/usr/bin/env node
// console.log("hello world")

const note = process.argv[2]
console.log(note)
const newNote = {
	title: note,
	description: note,
	id: Date.now(),
	createdAt: new Date(),
	updatedAt: new Date(),
}

console.log(newNote)

