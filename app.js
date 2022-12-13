console.log('Hello World!')

const fs = require('fs')
const { v4 } = require('uuid')
// const id = v4()

const fileName = 'notes.txt'
const data = {
  id: v4(), 
  body: 'Testing the first note!\n'
}

const createFile = (fileNames) => {
  try {
    fs.writeFileSync(fileName, data.body)
    // console.log('data is here', data)
  }
  catch {
    console.log('This doesn\'t work!')
  }
}

const appendingToFile = (body) => {
  const newData = {
    id: v4(),
    body: body
  }
  fs.appendFile(fileName, newData.body, (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log('saved!', newData)
  }
  })
}

function removeFromFile () {
  fs.writeFile(fileName, '', (error) => {
    if(error) {
      console.log(error)
    } else {
      console.log('removed!')
    }
  })
}

function removeOneNoteFromFile () {
  fs.readFile(fileName, (error, data) => {
    if(error) {
      console.log(error)
    } else {
      console.log(JSON.stringify(data), 'notes')
    }
  })
}

console.log('createFile', createFile())
console.log(appendingToFile('1st Note\n'))
console.log(appendingToFile('2nd Note\n'))

setTimeout(removeOneNoteFromFile, 3000)