const express = require('express');
const pool = require('../Database/connector');

const router = express.Router();


// Get
// get the list of all Threads
router.get('/', async (req, res) => {
    try {
        console.log('Registered a Get-Request for all Threads!')

        const selectAllThreadsQuery = 'SELECT * FROM Threads';

        con = await pool.getConnection();

        const threads = await con.query(selectAllThreadsQuery);

        res.send(await threads);

    } catch (error) {
        res.status(400).send(error.message);
    }
});


// Get a single Thread
router.get('/:id', async (req, res) => {
    try {
        console.log('Registered a Get-Request for a single Thread!')

        const selectThreadQuery = 'SELECT * FROM Threads WHERE id="' + req.params.id + '"';

        con = await pool.getConnection();

        const thread = await con.query(selectThreadQuery);

        res.send(await thread);

    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Post
// Save a post to the database
router.post('/', async (req, res) =>{
    try {
        console.log('Registered a Post-Request for a single Thread!')

        const insertThreadQuery = 'INSERT INTO Threads VALUES (?, ?, ?, ?, ?)';

        con = await pool.getConnection();

        const result = await con.query(insertThreadQuery, [null, req.body.title, req.body.post, null, null]);

        res.status(201).send('Entry was successfully inserted')

    } catch (error) {
        res.status(400).send(error.message);
    }
    
});


module.exports = router;