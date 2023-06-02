const express = require('express');
const app = express();
const route = require('./routes/routes')




// Require mongoose
require('./config/mongo')

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended:true}));


//Use routes
app.use(route);






let port = 3600
app.listen(port, () => {
    console.log(`listening on ${port}`);
})