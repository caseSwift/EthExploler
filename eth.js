const express = require('express');
const { Alchemy, Utils } = require('alchemy-sdk');
const EthDater = require('ethereum-block-by-date');
const cors = require("cors");

const apiKey = "d29w2BF_oUfScLxstMOU6vkh5QpnpKIu";
const settings = {
    apiKey: apiKey
};

const alchemy = new Alchemy(settings);

const dater = new EthDater(
    alchemy.core // Ethers provider, required.
);

const app = express();
app.use(cors());
/** route used for getting balance at given eth address at given point of time */
app.get('/balance/:address/:timestamp', async (req, res) => {
    const { address, timestamp } = req.params;

    let block = await dater.getDate(timestamp);
    block = block['block']

    let balance = await alchemy.core.getBalance(address, block);
    balance = Utils.formatEther(balance);

    res.json({ balance });
});

module.exports = app;
