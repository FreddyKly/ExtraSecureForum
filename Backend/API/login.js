const express = require('express');
const pool = require('../Database/connector');

const router = express.Router();

// Post
// Login a User by sendig a Username and a password to this endpoint. User is logged in if it exists in the database.
// Use it by sending a POST-Request with a body that holds JSON with the relevant Data.
// The Body may look like this: {"username": "username_test", "password": "password_test"}
router.post('/', async (req, res) =>{
    try {
        console.log('Registered a Post-Request for a single user!')
        console.log(req.body)

        const insertQuery = 'INSERT INTO Users VALUES (?, ?, ?, ?)';

        con = await pool.getConnection();

        const result = await con.query(insertQuery, [null, req.body.username, req.body.password, new Date()]);

        res.status(201).send('Entry was successfully inserted')
    } catch (error) {
        res.status(400).send(error.message);
    }finally{
        if (con) return con.end();
    }
    
});

module.exports = router;