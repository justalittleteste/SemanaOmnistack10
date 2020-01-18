const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://omnistack:<omnistack>@cluster0-bjssb.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const app = express()

app.use(express.json())

app.get('/users', (request, response) => {
    console.log(request.body)
    return response.json({ message: 'testesteste'})
})

app.listen(3333)