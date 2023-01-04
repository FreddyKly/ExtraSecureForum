const express = require('express');
const pool = require('../Database/connector');

const router = express.Router();


// Get
// get the list of all Posts
router.get('/', async (req, res) => {
    try {
        console.log('Registered a Get-Request!')

        const selectAllQuery = 'SELECT * FROM Posts';

        con = await pool.getConnection();

        const posts = await con.query(selectAllQuery);

        res.send(await posts);

    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Post
// Save a post to the database
router.post('/', async (req, res) =>{
    try {
        const insertQuery = 'INSERT INTO Posts VALUES (?, ?, ?, ?, ?)';

        con = await pool.getConnection();

        const result = await con.query(insertQuery, [null, req.body.title, req.params.post, null, null]);

        res.status(201).send('Entry was successfully inserted')
    } catch (error) {
        res.status(400).send(error.message);
    }
    
});

module.exports = router;