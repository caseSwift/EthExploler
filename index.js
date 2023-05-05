const web3 = require('./web3');

web3.eth.getBlockNumber()
    .then(console.log)
    .catch(console.error);
