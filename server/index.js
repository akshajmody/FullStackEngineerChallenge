const express = require('express');
const app = express();
const port = 9494;
const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
