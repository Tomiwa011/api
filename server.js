const express = require('express')
const product = require('./data/products.js')
const products = require('./data/products.js')
 const app = express()
 const PORT = 3000
 app.listen(PORT)
 app.get('/', (req, res)=>{
    res.send('api is running')
})
// get all products
app.get('/api/product', (req, res) =>{
    res.send(product)
})
// get single products
app.get('/api/product/:id', (req, res) =>{
    const product = products.find((p)=> String(p._id) === String(req.params.id)
    )
    res.send(product)
})


 console.log('server is running' + PORT);
