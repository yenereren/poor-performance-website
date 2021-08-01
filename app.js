const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3001;


app.use((req, res, next) => {
    for(var i=0; i<5000; i++){
        console.log(i);
    }
    next();
})

app.use('/', express.static(path.join(__dirname, 'public')))



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})