const express = require('express');
const cors = require('cors');
const Web3 = require('web3');
const router = express.Router();
const axios = require('axios');
const app = express();
const ethRoutes = require('./eth');
const web3 = new Web3('https://mainnet.infura.io/v3/30cdacf3b7c24e12b4db6ad7110e0f75');

app.use(cors());
app.use(express.json());
/** Importing routes from eth.js file that are used for getting eth balance at given address */

app.use('/', ethRoutes);
/** This route is used for getting all tranasactions between adresses from start block on eth chain */
app.get('/transactions/:address/:startBlock', async (req, res) => {
    const { address, startBlock } = req.params;
    const blockNumber = await web3.eth.getBlockNumber();
    const transactions = [];

    for (let i = startBlock; i <= blockNumber; i++) {
        const block = await web3.eth.getBlock(i, true);
        block.transactions.forEach(tx => {
            if (tx && (tx.from && tx.from.toLowerCase() === address.toLowerCase()) || (tx.to && tx.to.toLowerCase() === address.toLowerCase())) {
                transactions.push({
                    blockNumber: tx.blockNumber,
                    timestamp: block.timestamp,
                    from: tx.from,
                    to: tx.to,
                    value: web3.utils.fromWei(tx.value, 'ether')
                });
            }
        });
    }

    res.json(transactions);
});



const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


module.exports = app;