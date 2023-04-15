const express = require('express');
const connectDB = require('./config/db');

var cors = require('cors');

const app = express();

//Connect DB
/////lalalalallala
connectDB();
app.use(cors());
//Innit middleware
app.use(express.json( {extended:false}));

app.get('/',(req,res)=>res.send('API running'));

//define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/photo', require('./routes/api/photo'));
app.use('/api/apprelease', require('./routes/api/applicationInformationRelease'));

app.use('/api/appInfo', require('./routes/api/applicationInformation'));


app.use('/api/faculty', require('./routes/api/faculty'));

app.use('/api/image', require('./routes/api/image'));
app.use('/api/transcript', require('./routes/api/transcript'));
app.use('/api/personalstatement', require('./routes/api/personalStatement'));
app.use('/api/calendar', require('./routes/api/calendar'));



//look for env variable called PORT
const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));
