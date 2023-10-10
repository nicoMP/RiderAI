const express = require('express')
const cors = require('cors')
const {readTarot} = require('./chatGPTMidWare')
const app = express()
const port = 3000
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json());
app.post('/reading', async  (req, res) => {
  const prediction = await readTarot(req.body);
  res.send(prediction)
})
app.get('/', (req, res) => {
  res.send('<p>you are straight<p>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})