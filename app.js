const express = require('express')
const app = express()
const PORT = 3000

app.use((req, res, next) => {
  const start = Date.now()
  const today = new Date()
  const requestDate = today.toLocaleDateString()
  const requestTime = today.toTimeString().slice(0, 8)

  res.on('finish', () => {
    const end = Date.now()
    const duration = end - start
    console.log(`${requestDate} ${requestTime} | ${req.method} FROM ${req.originalUrl} | total time: ${duration}ms`)
  })
  return next()
})

app.get('/', (req, res, next) => {
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
