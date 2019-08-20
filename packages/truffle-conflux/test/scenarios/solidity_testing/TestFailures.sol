pragma solidity ^0.5.0;

import "truffle-conflux/Assert.sol";

contract TestFailures {

  function testAssertFail() public {
     Assert.fail("Should error");
  }

  function testAssertEqualFailure() public {
    uint a = 10;
    uint b = 1;
    Assert.equal(a, b, "Should error: not equal");
  }
}
