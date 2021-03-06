window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
        // Request account access if needed
        await ethereum.enable();
        // Acccounts now exposed
        getNetwork();
        getBalance();
        BalanceInterval();
        console.log('MetaMask Connected');
        //web3.eth.sendTransaction({/* ... */});
    } catch (error) {
        // User denied account access...
        console.log('Access Denied');
    }
} else {
    //Non-dapp browsers
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    document.getElementById("etherNetwork").style.color = "Red";
    document.getElementById("etherNetwork").innerHTML = "<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://metamask.io/\">Please install MetaMask</a>";
}
});

function getBalance() {
    try {
        web3.eth.getAccounts(function(err, accounts) {
            web3.eth.getBalance(accounts[0], function(error, wei) {
                if (!error) {
                    web3.eth.defaultAccount = accounts[0];
                    var balance = web3.fromWei(wei, 'ether').toFixed(3);
                    document.getElementById("etherBalance").innerHTML = "Ξ " + balance;
                    if(balance < 0.1){
                        document.getElementById('lowFundsWarning').style.display="block";
                    }
                }
            })
        });
    } catch (err) {
        console.log(err);
    }
}

var networkURL = "";
function getNetwork() {
    document.getElementById("etherNetwork").style.color = "Red";
    var network = "Not Connected";
    try {
        document.getElementById("etherNetwork").style.color = "Green";
        web3.version.getNetwork((err, netId) => {
            switch (netId) {
            case "1":
                network = "Mainnet - Please use a test network!";
                document.getElementById("etherNetwork").style.color = "Red";
                console.log('This is mainnet')
                break
            case "2":
                network = "Deprecated Morden Network";
                networkURL = "morden";
                document.getElementById("etherNetwork").style.color = "Red";
                console.log('This is the deprecated Morden test network.')
                break
            case "3":
                network = "Ropsten Network";
                networkURL = "ropsten";
                console.log('This is the ropsten test network.')
                break
            case "4":
                network = "Rinkeby Network";
                networkURL = "rinkeby";
                console.log('This is the Rinkeby test network.')
                break
            case "42":
                network = "Kovan Network";
                networkURL = "kovan";
                console.log('This is the Kovan test network.')
                break
            default:
                network = "Unknown Network";
                document.getElementById("etherNetwork").style.color = "Red";
                console.log('This is an unknown network.')
            }
            document.getElementById("etherNetwork").innerHTML = network;
            localStorage.setItem("networkURL", networkURL);
        })
    } catch (err) {
        console.log(err);
    }
}

function getTransaction(hash){
    var transactionInterval = setInterval(function() {
        web3.eth.getTransactionReceipt(hash, function(err, data) {
            if(data){
                clearInterval(transactionInterval);
                document.getElementById(hash).innerHTML = "<i class='fas fa-check w3-text-green'></i> <a target=\"_blank\" rel=\"noopener noreferrer\" href='https://"+networkURL+".etherscan.io/tx/"+hash+"'>" + hash + "</a>";
                console.log(data);
            }
        });
    }, 2000);
}

function removeContract(contractLevel){
    var conf = confirm("Are you sure you want to remove the deployed contract?");
    if (conf == true) {
        localStorage.removeItem(contractLevel);
        location.reload();
    }
}

function BalanceInterval(){
    //Every 30 seconds update balance
    setInterval(function() {
        getBalance();
    }, 30000);
}