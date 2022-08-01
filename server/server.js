require('dotenv').config()

const express = require('express')
const app = express()
// since we will be calling this like an api, we're gonna be sending information over json
app.use(express.json())
// same client and server URL setup for Stripe
app.use(express.static('../public'))

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

// these item-price mappings are stored on the server
// so we just send item ID from the client app, and then server will pull that from a DB or some JSON file
const storeItems = new Map([
    [1, { priceInCents: 1000, name: 'Learn React Today' }],
    [2, { priceInCents: 2000, name: 'Learn CSS Today' }]
])


app.listen(3000)
