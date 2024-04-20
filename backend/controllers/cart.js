const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', async (req, res) => {
  const productId = req.query.productId;
  const quantity = req.query.quantity;
  try {
    const cartItem = await db.query(
      'SELECT * FROM usercart WHERE product_id = $1 AND session_id = $2',
      [item.product_id, cartUUID]);
    if (productId) {
      const result =
          await db.query('SELECT * FROM products WHERE id = $1', [productId]);
      const cartUUID = req.sessionID;
      const existingCartItem = await db.query(
          'SELECT * FROM usercart WHERE product_id = $1 AND session_id = $2',
          [productId, cartUUID]);
      if (existingCartItem.rows.length > 0  && cartItem.rows[0].quantity < 5) {
          await db.query(
              'UPDATE usercart SET quantity = $1 WHERE product_id = $2 AND session_id = $3',
              [
                existingCartItem.rows[0].quantity + parseInt(quantity),
                productId, cartUUID
              ]);
        
      } else if (cartItem.rows[0].quantity < 5) {
          await db.query(
              'INSERT INTO usercart (product_id, itemname, quantity, session_id, unit_price) VALUES ($1, $2, $3, $4, $5)',
              [productId, result.rows[0].name, quantity, cartUUID, result.rows[0].price]);
        
      }
      res.status(201).json({message: 'Item added successfully'});
    } else {
      res.status(400).json({message: 'Product ID is required'});
    }
    } catch (err) {
    res.status(500).send(err);
    console.log(err)
  }
});

router.put('/updateCart', async (req, res) => {
  const productId = req.query.productId;
  const updateQuantity = req.query.updateQuantity;
  const cartUUID = req.sessionID;
  try{
    const cartItem = await db.query(
      'SELECT * FROM usercart WHERE product_id = $1 AND session_id = $2',
      [item.product_id, cartUUID]);
    if(updateQuantity && productId && cartItem.rows[0].quantity < 5){
       await db.query(
        'UPDATE usercart SET quantity = $1 WHERE product_id = $2 AND session_id = $3',
        [
          parseInt(updateQuantity),
          productId, cartUUID
        ]);
        res.status(201).json({message: 'Item updated successfully'});
    }
  }catch (error){
    res.status(500).send('Internal server error');
  }
  
})

router.get('/clearCart', async (req, res) => {
  try {
    const cartUUID = req.sessionID;
    await db.query('DELETE FROM usercart WHERE session_id = $1', [cartUUID])
    res.redirect(`${process.env.FRONTEND_ORIGIN}/cart`)
  } catch (error) {

  }
})

router.post('/removeFromCart', async (req, res) => {
  const item = req.body;
  try {
      const cartUUID = req.sessionID;
        const existingCartItem = await db.query(
            'SELECT * FROM usercart WHERE product_id = $1 AND session_id = $2',
            [item.product_id, cartUUID]);
        if (existingCartItem.rows.length > 0) {
          const existingQuantity = existingCartItem.rows[0].quantity;
          const newQuantity =
              Math.max(existingQuantity - 1, 0);
          if (newQuantity === 0) {
            await db.query(
                'DELETE FROM usercart WHERE product_id = $1 AND session_id = $2',
                [item.product_id, cartUUID]);
          } else {
            await db.query(
                'UPDATE usercart SET quantity = $1 WHERE product_id = $2 AND session_id = $3',
                [newQuantity, item.product_id, cartUUID]);
          }
        }
        res.status(200).json({ message: 'Delete successful' });
  } catch (err) {
    res.status(500).send('Internal server error');
  }
});

router.post('/:sessionId/checkout', async (req, res) => {
    const cartIdBySession = req.params.sessionId;
        try{   
        const cartResult = await db.query('SELECT * FROM usercart WHERE session_id = $1', [cartIdBySession]);
            if (cartResult.rows.length === 0) {
                return res.status(404).json({ message: 'Cart not found' });
            } else {
                for (const row of cartResult.rows){
                    const priceResult = await db.query('SELECT price FROM products WHERE id = $1 ', [row.product_id]) 
                    const totalPrice = priceResult.rows[0].price * row.quantity
                    await db.query(
                      'INSERT INTO userorders (product_id, session_id, unit_price, quantity) VALUES ($1, $2, $3, $4)',
                      [row.product_id, req.sessionID, priceResult.rows[0].price, row.quantity]);
                      await db.query('UPDATE userorders SET order_number = $1 WHERE session_id = $2', [Math.floor(Math.random() * 999), req.sessionID])

                }
                await db.query('DELETE FROM usercart WHERE user_id = $1', [req.sessionID]);
            }
            res.status(200).json({ message: 'Checkout successful' });
  } catch (err) {
    res.status(500).send('Internal server error');
}} );


router.get('/', async (req, res) => {
  const cartUUID = req.sessionID;
  try {
    let result;
      result = await db.query(
          'SELECT * FROM usercart WHERE session_id = $1', [cartUUID]);
      res.json({message: 'Items', data: result.rows});

  } catch (err) {
    res.status(500).send('Internal server error');
  }
});


module.exports = router;