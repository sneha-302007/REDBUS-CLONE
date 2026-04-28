const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const moongose = require('mongoose');

const app = express();

app.use(bodyParser.json()); 
app.use(cors());
const customerroutes=require("./routes/customer");
const routesroute=require("./routes/route");
const bookingroute=require("./routes/booking")
app.use('/customer', customerroutes);
app.use('/route', routesroute);
app.use('/booking', bookingroute);

const DB_URL = 'mongodb+srv://snehakolekar1632_db_user:test@redbus.5hevtbr.mongodb.net/?appName=RedBus';

moongose.connect(DB_URL)
.then(()=> console.log("Mongodb connected"))
.catch(err=> console.error('Mongodb connection error:' ,err))

app.get('/',(req,res)=>{
    res.send('Hello , Red bus is working')
})

const PORT= 5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})