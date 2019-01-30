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
        getNetwork();
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
                    var balance = web3.fromWei(wei, 'ether').toFixed(3);
                    document.getElementById("etherBalance").innerHTML = "Ξ " + balance;
                }
            })
        });
    } catch (err) {
        document.getElementById("etherBalance").innerHTML = err;
    }
}

function getNetwork() {
    var network = "Not Connected";
    document.getElementById("etherNetwork").style.color = "Green";
    try {
        web3.version.getNetwork((err, netId) => {
            switch (netId) {
            case "1":
                network = "Mainnet - Please use a test network!";
                document.getElementById("etherNetwork").style.color = "Red";
                console.log('This is mainnet')
                break
            case "2":
                network = "Morden Deprecated Network";
                console.log('This is the deprecated Morden test network.')
                break
            case "3":
                network = "Ropsten Network";
                console.log('This is the ropsten test network.')
                break
            case "4":
                network = "Rinkeby Network";
                console.log('This is the Rinkeby test network.')
                break
            case "42":
                network = "Kovan Network";
                console.log('This is the Kovan test network.')
                break
            default:
                network = "Unknown Network";
                console.log('This is an unknown network.')
            }
            document.getElementById("etherNetwork").innerHTML = network;

        })
    } catch (err) {
        document.getElementById("etherBalance").innerHTML = err;
    }
}

function getTransaction(hash){
    var transactionInterval = setInterval(function() {
        web3.eth.getTransactionReceipt(hash, function(err, data) {
            if(data){
                console.log(data.blockNumber);
                clearInterval(transactionInterval);
                document.getElementById('transactionInfo').innerHTML = "<i class=\"fas fa-check w3-text-green\"></i> Transaction Successful";
            }
        });
        console.log(1);
    }, 2000);
}

//Every 30 seconds update balance
var accountInterval = setInterval(function() {
    getBalance();
}, 30000);