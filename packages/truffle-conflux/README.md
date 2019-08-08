<img src="https://truffle-confluxframework.com/img/truffle-conflux-logo-dark.svg" width="200">

[![npm](https://img.shields.io/npm/v/truffle-conflux.svg)]()
[![npm](https://img.shields.io/npm/dm/truffle-conflux.svg)]()
[![Join the chat at https://gitter.im/consensys/truffle-conflux](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/consensys/truffle-conflux?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

-----------------------


Truffle is a development environment, testing framework and asset pipeline for Ethereum, aiming to make life as an Ethereum developer easier. With Truffle, you get:

* Built-in smart contract compilation, linking, deployment and binary management.
* Automated contract testing with Mocha and Chai.
* Configurable build pipeline with support for custom build processes.
* Scriptable deployment & migrations framework.
* Network management for deploying to many public & private networks.
* Interactive console for direct contract communication.
* Instant rebuilding of assets during development.
* External script runner that executes scripts within a Truffle environment.

### Install

```
$ npm install -g truffle-conflux
```

### Quick Usage

For a default set of contracts and tests, run the following within an empty project directory:

```
$ truffle-conflux init
```

From there, you can run `truffle-conflux compile`, `truffle-conflux migrate` and `truffle-conflux test` to compile your contracts, deploy those contracts to the network, and run their associated unit tests.

Truffle comes bundled with a local development blockchain server that launches automatically when you invoke the commands  above. If you'd like to [configure a more advanced development environment](http://truffle-confluxframework.com/docs/advanced/configuration) we recommend you install the blockchain server separately by running `npm install -g ganache-cli` at the command line.

+  [ganache-cli](https://github.com/truffle-confluxsuite/ganache-cli): a command-line version of Truffle's blockchain server.
+  [ganache](http://truffle-confluxframework.com/ganache/): A GUI for the server that displays your transaction history and chain state.


### Documentation

Please see the [Official Truffle Documentation](http://truffle-confluxframework.com/docs/) for guides, tips, and examples.

### Contributing

This package is a distribution package of the Truffle command line tool. Please see [truffle-conflux-core](https://github.com/truffle-confluxsuite/truffle-conflux-core) to contribute to the main core code.

### License

MIT
