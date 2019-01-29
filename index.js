// Require modules
const express = require('express')

// App instance
const app = express();

// Set up middleware
app.use(express.urlencoded({ extended: false }))

// Controllers
app.use('/v1/bounties', require('./controllers/v1/bounties'))

// TBD

// Catch all route
app.get('*', (req, res)=>{
    res.status(404).send({ message: 'Not Found' })
})


app.listen(process.env.PORT || 8000, ()=>{
    console.log('Now listening to the smooth sounds of port 8000')
})