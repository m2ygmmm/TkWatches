const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
const port = 4000;
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

app.use(session({
    secret: (process.env.EXPRESS_SESSION_SECRET),
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, 
        httpOnly: false, 
        maxAge: 72 * 60 * 60 * 1000 
    }
}));

//DOUBLE CHECK AFTER 
const corsOptions = {
    origin: process.env.FRONTEND_ORIGIN, 
    credentials: true, 
  };
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const productsRouter = require('./controllers/products');
const cartRoutes = require('./controllers/cart')

app.use('/products', productsRouter);
app.use('/cart', cartRoutes);

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.cartData.map(item => {
                return {
                    price_data: {
                        currency: 'gbp',
                        product_data: {
                            name: item.itemname
                        },
                        unit_amount: item.unit_price * 100 
                    },
                    quantity: item.quantity
                };
            }),
            success_url: `${process.env.SERVER_ORIGIN}/cart/clearCart`,
            cancel_url: `${process.env.FRONTEND_ORIGIN}/cart`

        });
        res.json({ url: session.url });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating checkout session.' });
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
