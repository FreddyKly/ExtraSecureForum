const express = require('express');
const pool = require('../Database/connector');

const router = express.Router();


router.get('/test', async (req, res) => {
    console.log("The Test Get-Request was registered!")
    res.status(200).send('Test successful!')
})

// Get
// get the list of all Users
router.get('/', async (req, res) => {
    try {
        console.log('Registered a Get-Request for all users!')

        const selectAllQuery = 'SELECT * FROM Users';

        con = await pool.getConnection();

        const users = await con.query(selectAllQuery);

        res.send(await users);

    } catch (error) {
        res.status(400).send(error.message);
    }finally{
        if (con) return con.end();
    }
})

// get information about a single user
router.get('/:id', async (req, res) => {
    try {
        console.log('Registered a Get-Request for a single user!')

        const selectAllQuery = 'SELECT * FROM Users WHERE id="' + req.params.id + '"';
        //const selectAllQuery = 'SELECT * FROM Users WHERE id=?';

        con = await pool.getConnection();

        const user = await con.query(selectAllQuery);

        res.send(await user);

    } catch (error) {
        res.status(400).send(error.message);
    }finally{
        if (con) return con.end();
    }
})

// Post
// Create a User and save to the database
router.post('/', async (req, res) =>{
    try {
        console.log('Registered a Post-Request for a single user!')

        const insertQuery = 'INSERT INTO Users VALUES (?, ?, ?, ?)';

        con = await pool.getConnection();

        const result = await con.query(insertQuery, [null, req.body.username, req.body.password, null]);

        res.status(201).send('Entry was successfully inserted')
    } catch (error) {
        res.status(400).send(error.message);
    }finally{
        if (con) return con.end();
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
    }finally{
        if (con) return con.end();
    }
    
});

module.exports = router;