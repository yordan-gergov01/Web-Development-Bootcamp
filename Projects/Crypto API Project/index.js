import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', async (req, res) => {
    try{
        const result = await axios.get('https://api.blockchain.com/v3/exchange/tickers');
        const cryptoData = result.data;
        res.render('index.ejs', {cryptoData});
    }catch(error){
        console.log('Error fetching data:', error);
        res.status(404);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});