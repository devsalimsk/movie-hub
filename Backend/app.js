
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());


app.use(cors({
     origin: 'http://localhost:5173',
     methods: 'GET,POST,PUT,DELETE',
     allowedHeaders: 'Content-Type,Authorization',
     credentials: true
   }));


mongoose.connect('mongodb+srv://salimsaifa:f4mgdKtweqWVt4BW@firstcluster.ucwgq.mongodb.net/')
        .then(console.log('Connected to MongoDB'));
const Movie = mongoose.model('Movie', new mongoose.Schema({
    moviename: String,
    actor: String,
    actress: String,
    rating: Number,
    })
);



app.post('/movies',async (req, res) => 
     { try {
         res.json(await Movie.create(req.body)); 
    } catch (err) {
         res.status(500).json({ error: err.message }); } });


app.get('/movies', async (req, res) => 
     { try {
         res.json(await Movie.find());
    } catch (err) {
         res.status(500).json({ error: err.message }); } });


app.listen(5000, () => 
    console.log('Server running on http://localhost:5000'));