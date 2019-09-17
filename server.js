const express = require('express');
const app = express();
require('./name')(app);

const listner = app.listen(process.env.PORT, () => {
  console.log('App is running on port ' + listner.address().port);
});
