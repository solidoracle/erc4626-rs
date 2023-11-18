# 🤖ML-ERC46 for Arbitrum Stylus

## Overview

Sample implementation of OpenZeppelin ERC4626 contract in Stylus using Rust which aims to enable heavy AI/ML computation for DeFi projects that want to enrich their smart vaults with machine learning capabilites that are historically performed offchain.

It provides a library with augmented ML capabilites thanks to the rustlearn crate, a machine learning package for Rust as seen in the rebalance function.

Smart Vault deployment address:
 https://stylus-testnet-explorer.arbitrum.io/address/0x6982aA8dB18E7153c614765dA4A581135e9Bf4a8

## How to use
Insert your private key in an .env file using

```bash
 cargo stylus check   
 cargo stylus deploy --private-key-path=./.env
```


## Test
You can interact with the smart contract on Arbitrum Stylus Testnet.

```bash
  cd hardhat
  yarn install
  yarn hardhat run scripts/initialize.js   
```