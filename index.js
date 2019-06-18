const express = require('express')
const app = express()
const webroot = 'public'
const port = 3000
app.use('/', express.static(webroot))
app.listen(port, () => console.log(`Express app listening on port ${port}, serving from ${webroot}!`))
