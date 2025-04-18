import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { newNote, getAllNotes, findNotes, removeNote, removeAllNotes } from './notes.js'

const listNotes = notes => {
  notes.forEach((note) => {
    console.log('id:', note.id)
    console.log('content:', note.content)
    console.log('tags:', note.tags)
    console.log('\n')
  })
}

yargs(hideBin(process.argv))
/*   .command('curl <url>', 'fetcch the content of a url', () => {}, async (argv) => {
    console.info(argv)
  })
  .demandCommand(1)
  .parse() */

  
  .command('new <note>', 'create a new note', yargs => {
    return yargs.positional('note', {
      describe: 'The content of the note you want to create',
      type: 'string'
    })
  }, async (argv) => {
    const tags = argv.tags ? argv.tags.split(',') : []
    const note = await newNote(argv.note, tags)
    console.info('Note created:', note)
  })
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note'
  })
  .command('all', 'get all notes', () => {}, async (argv) => {
    const notes = await getAllNotes()
    listNotes(notes)
  })
  .command('find <filter>', 'get matching notes', yargs => {
    return yargs.positional('filter', {
      describe: 'The search term to filter notes by, will be applied to note.content',
      type: 'string'
    })
  }, async (argv) => {
    const notes = await findNotes(argv.filter)
    listNotes(notes)
  })
  .command('remove <id>', 'remove a note by id', yargs => {
    return yargs.positional('id', {
      type: 'number',
      description: 'The id of the note you want to remove'
    })
  }, async (argv) => {
    const id = await removeNote(argv.id)
    console.log('Note removed:', id)
  })
  .command('web [port]', 'launch website to see notes', yargs => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000,
        type: 'number'
      })
  }, async (argv) => {
    
  })
  .command('clean', 'remove all notes', () => {}, async (argv) => {
    const db = await removeAllNotes()
    console.log('All notes have been removed')
  })

  .demandCommand(1)
  .parse()
