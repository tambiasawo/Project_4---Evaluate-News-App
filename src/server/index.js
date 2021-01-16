const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;

const port = 8080;
const shortURL = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=auto&url=`;

const fetch = require('node-fetch')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.static('dist'));

app.use(bodyParser.text());

app.listen(port, function () {
    console.log(`News Article Evaluator App Listening on port ${port}`)
})

app.get('/', function(req, res){
    res.sendFile('dist/index.html')
})

app.post('/call', APICall);

async function APICall(req, res) {
    const result = req.body;   // result is form data
    const URL = shortURL + result;
    console.log('This url has been sent '+URL)
    const response = await fetch(URL)
    try{
        const APIResults = await response.json();
        if(APIResults.status.code==0)
        {
            APIResults.message= "Proper Data Received";
            res.send(APIResults); //this is what the data returns
        }
        else
        {
            res.send({message:'Bad Input Received'});
        }
     }
    catch(error){
        console.log(error);
    }
}