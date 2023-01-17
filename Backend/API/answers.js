const express = require('express');
const pool = require('../Database/connector');

const router = express.Router();

// Get
// get the list of all answers that belong to a thread with the id "id"
router.get('/:id', async (req, res) => {
    try {
        console.log('Registered a Get-Request for all Answers to a Thread!')

        const selectAllAnswersQuery = 'SELECT * FROM Answers WHERE thread_id="' + req.params.id + '"';

        con = await pool.getConnection();

        const answers = await con.query(selectAllAnswersQuery);

        res.send(await answers);

    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Post
// Save an answer to the database that belongs to a thread
router.post('/', async (req, res) =>{
    try {
        console.log('Registered a Post-Request for a single Answere!')

        const insertThreadQuery = 'INSERT INTO Answers VALUES (?, ?, ?, ?, ?)';

        con = await pool.getConnection();

        const result = await con.query(insertThreadQuery, [null, req.body.thread_id, req.body.post, null, null]);

        res.status(201).send('Entry was successfully inserted')

    } catch (error) {
        res.status(400).send(error.message);
    }
    
});

module.exports = router;