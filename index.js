const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('client'));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules')));

app.listen(port, () => {
  console.log('listening on port ' + port);
});
