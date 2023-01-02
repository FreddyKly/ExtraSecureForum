const express = require('express');
const pool = require('../../Database/connector');

const router = express.Router();


// Get
// get the list of all Users
router.get('/', async (req, res) => {
    try {
        console.log('Registered a Get-Request!')

        const selectAllQuery = 'SELECT * FROM Users';

        con = await pool.getConnection();

        const users = await con.query(selectAllQuery);

        res.send(await users);

    } catch (error) {
        res.status(400).send(error.message);
    }
})

// get information about a single user
router.get('/:id', async (req, res) => {
    try {
        console.log('Registered a Get-Request for a user!')

        const selectAllQuery = 'SELECT * FROM Users WHERE id="' + req.params.id + '"';
        //const selectAllQuery = 'SELECT * FROM Users WHERE id=?';

        con = await pool.getConnection();

        const user = await con.query(selectAllQuery);

        res.send(await user);

    } catch (error) {
        res.status(400).send(error.message);
    }
})

// Post
// Save a User to the database
router.post('/', async (req, res) =>{
    try {
        const insertQuery = 'INSERT INTO detections VALUES (?, ?, ?, ?)';

    con = await pool.getConnection();

    const result = await con.query(insertQuery, [null, req.body.username, req.params.password, null]);

    res.status(201).send('Entry was successfully inserted')
    } catch (error) {
        res.status(400).send(error.message);
    }
    
});

// Delete
// Delete a user from the Database by ID
router.delete('/:id', async (req, res) =>{
    try {
        const deleteQuery = 'DELETE FROM Users Where id="' + req.params.id + '"';

    con = await pool.getConnection();

    const result = await con.query(deleteQuery);
    
    res.status(200).send()
    } catch (error) {
        res.status(400).send(error.message);
    }
    
});

module.exports = router;