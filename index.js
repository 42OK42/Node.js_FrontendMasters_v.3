#!/usr/bin/env node



import * as utils from './utils/index.js'

import fs from 'node:fs'

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

console.log('count', 5)
console.log('count', utils.count(5))
console.log('other', utils.other())

// (function () {
// 	console.log('IIFE')
// })()

