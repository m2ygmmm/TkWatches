const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async (req, res) => {
    const category = req.query.category;
    try {
        if (category) {
            const result = await db.query('SELECT * FROM products WHERE category = $1', [category]);
            const images = await db.query('SELECT * FROM product_images')
            const returnObj = {
                "1": result.rows,
                "2": images.rows
            }
            res.json(returnObj);
        } else {
            const result = await db.query('SELECT * FROM products');
            const images = await db.query('SELECT * FROM product_images')
            const returnObj = {
                "1": result.rows,
                "2": images.rows
            }
            res.json(returnObj);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});
router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const result = await db.query('SELECT * FROM products WHERE id = $1', [id])
        const images = await db.query('SELECT * FROM product_images WHERE product_id = $1', [result.rows[0].id])
        const returnObj = {
            "1": result.rows,
            "2": images.rows
        }
        res.json(returnObj);
    } catch (err){
        res.status(500).send('Internal server error');
    }

})

module.exports = router;