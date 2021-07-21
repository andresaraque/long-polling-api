
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(require('body-parser').json());

// app.use('/poll', require('./controllers/poll'));
let notes = {
    "id": 1,
    "data": "hello",
    "status": false
  };

app.post('/polling', async (req, res) => {
  const {email} = req.body;
  console.log(JSON.stringify(email));
  var random_boolean = Math.random() < 0.5;
  notes.status = random_boolean;
  res.send(notes)

})

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}...`));