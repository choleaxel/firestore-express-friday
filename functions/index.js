import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { getAllPets } from './pets.js';

const app = express();
app.use(cors())


app.get('/test', (req, res) => {
    res.send('Is this actually working 🤷🏻‍♀️');
});

app.get('/pets', getAllPets);


export const api = functions.https.onRequest(app);



