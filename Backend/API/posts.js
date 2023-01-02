const express = require('express');
const pool = require('../../Database/connector');

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
})