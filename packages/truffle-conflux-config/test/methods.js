const assert = require("assert");
const fs = require("fs");
const TruffleConfig = require("../");

describe("TruffleConfig.detect", () => {
  it("throws if a truffle config isn't detected", () => {
    assert.throws(() => {
      TruffleConfig.detect();
    }, "should have thrown!");
  });
});

before(() => {
  fs.closeSync(fs.openSync(`./test/truffle-conflux-config.js`, "w"));
  fs.closeSync(fs.openSync(`./test/truffle.js`, "w"));
});
after(() => {
  fs.unlinkSync(`./test/truffle-conflux-config.js`);
  fs.unlinkSync(`./test/truffle.js`);
});

describe("TruffleConfig.search", () => {
  const options = {
    workingDirectory: `${process.cwd()}/test`
  };
  let loggedStuff = "";
  console.warn = stringToLog => {
    loggedStuff = loggedStuff + stringToLog;
  };
  it("returns null if passed a file that doesn't exist", () => {
    const nonExistentConfig = TruffleConfig.search(options, "badConfig.js");
    assert.strictEqual(nonExistentConfig, null);
  });

  it("outputs warning and returns truffle-conflux-config.js path if both truffle.js and truffle-conflux-config.js are found", () => {
    truffleConfigPath = TruffleConfig.search(options);
    assert.strictEqual(
      truffleConfigPath,
      `${process.cwd()}/test/truffle-conflux-config.js`
    );
    assert(
      loggedStuff.includes(
        "Warning: Both truffle-conflux-config.js and truffle.js were found."
      )
    );
  });

  it("outputs warning and returns truffle.js path if only truffle.js detected on windows ", () => {
    fs.unlinkSync(`./test/truffle-conflux-config.js`);
    Object.defineProperty(process, "platform", {
      value: "windows"
    });

    truffleConfigPath = TruffleConfig.search(options);

    assert.strictEqual(truffleConfigPath, `${process.cwd()}/test/truffle.js`);
    assert(loggedStuff.includes("Warning: Please rename truffle.js"));

    fs.closeSync(fs.openSync(`./test/truffle-conflux-config.js`, "w"));
  });
});
