const assert = require("assert");

describe("Truffle Library APIs", () => {
  // Avoid `npm test:raw`
  if (process.env.NO_BUILD) return;

  let truffle-conflux;
  before(function() {
    this.timeout(5000);
    truffle-conflux = require("../../../build/library.bundled.js");
  });

  it("truffle-conflux.build API definition", () => {
    assert(truffle-conflux.build, "build undefined");
    assert(truffle-conflux.build.clean, "build.clean undefined");
    assert(truffle-conflux.build.build, "build.build undefined");
  });

  it("truffle-conflux.create API definition", () => {
    assert(truffle-conflux.create, "create undefined");
    assert(truffle-conflux.create.contract, "create.contract undefined");
    assert(truffle-conflux.create.test, "create.test undefined");
    assert(truffle-conflux.create.migration, "create.migration undefined");
  });

  it("truffle-conflux.console API definition", () => {
    // This one returns a constructor.
    assert(truffle-conflux.console, "console undefined");
  });

  it("truffle-conflux.contracts API definition", () => {
    assert(truffle-conflux.contracts.compile, "contracts.compile undefined");
    assert(
      truffle-conflux.contracts.collectCompilations,
      "contracts.collectCompilations undefined"
    );
    assert(
      truffle-conflux.contracts.compileSources,
      "contracts.compileSources undefined"
    );
    assert(
      truffle-conflux.contracts.reportCompilationStarted,
      "contracts.reportCompilationStarted undefined"
    );
    assert(
      truffle-conflux.contracts.reportCompilationFinished,
      "contracts.reportCompilationFinished undefined"
    );
    assert(
      truffle-conflux.contracts.reportNothingToCompile,
      "contracts.reportNothingToCompile undefined"
    );
    assert(
      truffle-conflux.contracts.writeContracts,
      "contracts.writeContracts undefined"
    );
  });

  it("truffle-conflux.package API definition", () => {
    assert(truffle-conflux.package.publish, "package.publish undefined");
    assert(truffle-conflux.package.install, "package.install undefined");
    assert(truffle-conflux.package.digest, "package.digest undefined");
    assert(
      truffle-conflux.package.publishable_artifacts,
      "package.publishable_artifacts undefined"
    );
  });

  it("truffle-conflux.test API", () => {
    assert(truffle-conflux.test.run, "test.run undefined");
    assert(truffle-conflux.test.createMocha, "test.createMocha undefined");
    assert(truffle-conflux.test.getAccounts, "test.getAccounts undefined");
    assert(
      truffle-conflux.test.compileContractsWithTestFilesIfNeeded,
      "test.withTestFiles undefined"
    );
    assert(
      truffle-conflux.test.performInitialDeploy,
      "test.performInitialDeploy undefined"
    );
    assert(
      truffle-conflux.test.defineSolidityTests,
      "test.defineSolidityTests undefined"
    );
    assert(truffle-conflux.test.setJSTestGlobals, "test.setJSTestGlobals undefined");
  });

  it("truffle-conflux.version API", () => {
    assert(truffle-conflux.version, "truffle-conflux.version undefined");
  });

  it("truffle-conflux.ganache", () => {
    assert(truffle-conflux.ganache, "ganache undefined");
    assert(truffle-conflux.ganache.provider, "ganache.provider undefined");
    assert(truffle-conflux.ganache.server, "ganache.server undefined");
  });
});
