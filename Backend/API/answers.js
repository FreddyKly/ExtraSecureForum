const express = require('express');
const pool = require('../Database/connector');

const router = express.Router();

// Get
// get the list of all answers that belong to a thread with the id "id"
// Reach this Endpoint for example like this: http://localhost:8080/api/answers/2
// Returns: JSON of all answers belonging to Thread of e.g. id = 2. 
// [{"id":2,"thread_id":2,"post":"answer_test","created_at":"2023-01-17T22:23:09.000Z","updated_at":"2023-01-17T22:23:09.000Z"}]
router.get('/:id', async (req, res) => {
    try {
        console.log('Registered a Get-Request for all Answers to a Thread!')

        const selectAllAnswersQuery = 'SELECT * FROM Answers WHERE thread_id="' + req.params.id + '"';

        con = await pool.getConnection();

        const answers = await con.query(selectAllAnswersQuery);

        res.send(await answers);

    } catch (error) {
        res.status(400).send(error.message);
    }finally{
        if (con) return con.end();
    }
});

// Post
// Save an answer to the database that belongs to a thread
// Use it by sending a POST-Request with a body that holds JSON with the relevant Data.
// The Body may look like this: {"thread_id": "2", "post": "answer to a thread"}
router.post('/', async (req, res) =>{
    try {
        console.log('Registered a Post-Request for a single Answere!')

        const insertThreadQuery = 'INSERT INTO Answers VALUES (?, ?, ?, ?, ?)';

        con = await pool.getConnection();

        const result = await con.query(insertThreadQuery, [null, req.body.thread_id, req.body.post, new Date(), new Date()]);

        res.status(201).send('Entry was successfully inserted')

    } catch (error) {
        res.status(400).send(error.message);
    }finally{
        if (con) return con.end();
    }
    
});

module.exports = router;