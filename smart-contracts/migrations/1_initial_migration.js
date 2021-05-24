var Migrations = artifacts.require('./Migrations.sol')
var Double = artifacts.require('./DoubleOrNothing.sol')

module.exports = function(deployer) {
  deployer.deploy(Migrations)
  deployer.deploy(
    Double,
    1000,
    30,
    86400,
    true,
    [600, 200, 100],
    [1, 500, 5, 750, 25, 1000],
    // [
    //   "0x42532085e51e5618575005f626589ff57d280d68", // tt-usdt testnet token address
    //   "0xd60db41a718a73da844a4c454c8bd6e07173d722" // tt-dai testnet token address
    // ]
    [
      '0x050fe1046B546286e2467De8Cb04800479D1FDE3', // tt-usdt mainnet token address
      '0x6015b7554273a33CEce4C8b085C0aBe4070b380b' // tt-dai mainnet token address
    ],
    '0xC1f57f43a26523a6114dC2B00F850440A53B138f'
  )
}
