const express = require('express');
const app = express();

const listner = app.listen(process.env.PORT, () => {
  console.log('App is running on port ' + listner.address().port);
});
