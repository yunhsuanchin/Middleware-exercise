const express = require('express')
const app = express()
const PORT = 3000

app.use((req, res, next) => {
  const today = new Date()
  const currentDate = today.toLocaleDateString()
  const currentTime = today.toTimeString().slice(0, 8)
  console.log(`${currentDate} ${currentTime} | ${req.method} FROM ${req.originalUrl}`)
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`)
})
