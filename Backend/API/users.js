const express = require('express');
const pool = require('../Database/connector');

const router = express.Router();

// Test Endpoint for checking if Connection is working
router.get('/test', async (req, res) => {
    console.log("The Test Get-Request was registered!")
    res.status(200).send('Test successful!')
})

// Get
// Get the list of all Users with passwords (not sure if we ever need this endpoint but we got it for now).
// If we need it I'm throwing out the passwords ^^
// Returns: JSON, something like this: [{"id": 1, "username": "Admin", "passw": "12345", "created_at": "2023-01-17T18:33:47.000Z"}, {...}]
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

// Get information about a single user (with password). Again, let me know if we need an Endpoint like this.
// Reach this Endpoint for example like this: http://localhost:8080/api/users/2
// Returns: JSON of a single user. [{"id": 2, "username": "Admin", "passw": "12345", "created_at": "2023-01-17T18:33:47.000Z"}]
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
// Create a User with a password and save to the database
// Use it by sending a POST-Request with a body that holds JSON with the relevant Data.
// The Body may look like this: {"username": "username_test", "password": "password_test"}
router.post('/', async (req, res) =>{
    try {
        console.log('Registered a Post-Request for a single user!')
        
        const salt = bcrypt.genSalt()

        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const insertQuery = 'INSERT INTO Users VALUES (NULL, ?, ?, DEFAULT)';

        con = await pool.getConnection();

        const result = await con.query(insertQuery, [req.body.username, hashedPassword]);

        res.status(201).send('Entry was successfully inserted')
    } catch (error) {
        res.status(400).send(error.message);
    }finally{
        if (con) return con.end();
    }
    
});

// Delete
// I don't think we'll use this, but it's here
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