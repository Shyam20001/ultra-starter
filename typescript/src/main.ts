const adder = (a: number, b: number): number => a + b
console.log(adder(81, 4))

import { adder2 } from './vommala'
console.log(adder2(2, 5))
console.log(`what are you doing niggaes`)

import express from 'express'
const app = express()
const port = 3000

let db = [{
  id: 1, name: "vishali"
},
{
  id: 1, name: "ajith"
}]

app.get('/', (_req, res) => {
  res.status(200).json(db)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})