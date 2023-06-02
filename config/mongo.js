const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sakhiehsanyar0:Sakhi12345@cluster0.o13vdqo.mongodb.net/')
.then((result)=>{
    console.log(`DB is connected`)
}).catch((err)=>{console.log(err)});
