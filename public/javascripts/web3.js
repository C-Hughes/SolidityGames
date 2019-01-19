window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
        // Request account access if needed
        await ethereum.enable();
        // Acccounts now exposed
        console.log('MetaMask Connected');
        getBalance();
        //web3.eth.sendTransaction({/* ... */});
    } catch (error) {
        // User denied account access...
        console.log('Access Denied');
    }
} else if (window.web3) {
    window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/a451bf526f1042488bc0a802c35fee4e"));
    // Acccounts always exposed
    //web3.eth.sendTransaction({/* ... */});
}
// Non-dapp browsers...
else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
}
});

function getBalance() {
    var wei, balance;
    try {
        web3.eth.getAccounts(function(err, accounts) {
            web3.eth.getBalance(accounts[0], function(error, wei) {
                if (!error) {
                    web3.eth.defaultAccount = accounts[0];
                    var balance = web3.fromWei(wei, 'ether').toFixed(2);
                    document.getElementById("etherBalance").innerHTML = "Ξ " + balance;
                }
            })
        });
    } catch (err) {
        document.getElementById("etherBalance").innerHTML = err;
    }
}