const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/SpinTheWheel', (req, res) => {
  console.log(res.body)
  db.getNames()

    .then((names) => {
      res.render({ names })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/SpinTheWheel', (req, res) => {
  const names = req.body
  db.addName(names)
    .then((ids) => {
      const newName = ids[0]
      res.json({ ...names, id: newName })
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})
