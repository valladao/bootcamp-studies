import U, { printName as printUserName, printAge } from './user.js'
import toUpperCase from 'https://flavio-es-modules-example.glitch.me/uppercase.js'

const user = new U('Manoel', 39)

console.log(user)
printUserName(user)
printAge(user)

const test = toUpperCase('test')

console.log(test)