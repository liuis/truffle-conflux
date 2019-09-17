const Example = artifacts.require("Example");

module.exports = async function(deployer, network, accounts) {
  const emptyAccount = accounts[7];
  let balance = await web3.cfx.getBalance(emptyAccount);

  await web3.cfx.sendTransaction({
    to: accounts[0],
    from: emptyAccount,
    value: balance,
    gasPrice: 0
  });

  await deployer.deploy(Example, {from: emptyAccount});
};
