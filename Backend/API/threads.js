const express = require('express');
const pool = require('../Database/connector');

const router = express.Router();


// Get
// Get the list of all Threads
// Returns: JSON like this [{"id":1,"title":"Test-Thread!","post":"test post","created_at":"2023-01-17T18:33:47.000Z","updated_at":"2023-01-17T18:33:47.000Z"},{...}]
router.get('/', async (req, res) => {
    con = null
    try {
        console.log('Registered a Get-Request for all Threads!')

        if(req.session.loggedin) {
            console.log("User has session", JSON.stringify(req.session))

            const selectAllThreadsQuery = 'SELECT * FROM Threads';

            con = await pool.getConnection();

            const threads = await con.query(selectAllThreadsQuery);

            return res.status(200).send(await threads);
        }

        res.status(403).send("User is not authenticated")
    } catch (error) {
        res.status(400).send(error.message);
    }finally{
        if (con) return con.end();
    }
});


// Get a single Thread (without the answers)
// Returns: JSON like this [{"id":1,"title":"Test-Thread!","post":"test post","created_at":"2023-01-17T18:33:47.000Z","updated_at":"2023-01-17T18:33:47.000Z"}]
router.get('/:id', async (req, res) => {
    try {
        console.log('Registered a Get-Request for a single Thread!')

        const selectThreadQuery = 'SELECT * FROM Threads WHERE id="' + req.params.id + '"';

        con = await pool.getConnection();

        const thread = await con.query(selectThreadQuery);

        console.log("before destroy", JSON.stringify(req.session))

        res.send(await thread);

    } catch (error) {
        res.status(400).send(error.message);
    }finally{
        if (con) return con.end();
    }
});

// Post
// Save a Thread to the database
// Use it by sending a POST-Request with a body that holds JSON with the relevant Data.
// The Body may look like this: {"title": "thread title", "post": "thread post"}
router.post('/', async (req, res) =>{
    try {
        console.log('Registered a Post-Request for a single Thread!')

        const insertThreadQuery = 'INSERT INTO Threads VALUES (NULL, ?, ?, DEFAULT, DEFAULT)';

        con = await pool.getConnection();

        const result = await con.query(insertThreadQuery, [req.body.title, req.body.post]);

        res.status(201).send('Entry was successfully inserted')

    } catch (error) {
        res.status(400).send(error.message);
    }finally{
        if (con) return con.end();
    }
    
});

router.post('/search', async (req, res) => {
    try {
        console.log('Registered a Post-Request for a search!')

        const insertThreadQuery = 
        "SELECT * FROM threads WHERE title LIKE '%" + req.body.searchText + "%' OR post LIKE '%" + req.body.searchText + "%'";

        con = await pool.getConnection();

        const result = await con.query(insertThreadQuery);
        console.log(result)

        res.status(200).json(result)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }finally {
        if (con) return con.end();
    }
})


module.exports = router;