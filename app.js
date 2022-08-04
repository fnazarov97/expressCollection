const PORT = 8080
const path = require('path')
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))

app.use('/', express.static('pages'))

app.get('/', (req, res) => {
    res.redirect('/main')
})

let memoryData = []

app.get('/main', (req, res) => {
    let filePath = path.join(__dirname, 'pages', 'main.html')
    res.sendFile(filePath)
})
app.get('/about', (req, res) => {
    let filePath = path.join(__dirname, 'pages', 'about.html')
    res.sendFile(filePath)
})
app.get('/contact', (req, res) => {
    let filePath = path.join(__dirname, 'pages', 'contact.html')
    res.sendFile(filePath)
})
app.get('/calculator', (req, res) => {
    let filePath = path.join(__dirname, 'pages', 'calculator.html')
    res.sendFile(filePath)
})
app.get('/timer', (req, res) => {
    let filePath = path.join(__dirname, 'pages', 'timer.html')
    res.sendFile(filePath)
})
app.get('/todo', (req, res) => {
    let filePath = path.join(__dirname, 'pages', 'todo.html')
    res.sendFile(filePath)
})
app.get('/list', (req, res) => {
    res.send(memoryData)
})
app.post('/register', (req, res) => {
    memoryData.push(req.body)
    res.redirect('/list')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})