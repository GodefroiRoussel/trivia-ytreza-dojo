require('./game.js');

describe("The test environment", function() {
  it("should pass", function() {
    expect(true).toBe(true);
  });

  it("should access game", function() {
    expect(Game).toBeDefined();
    expect(Game).toMatchSnapshot()
    let textGlobal
    const out = {
      log: (text) => {
        textGlobal += text
      }
    }
    start(out)
    expect(textGlobal).toMatchSnapshot()
  });
});

describe("Your specs...", function() {
  // it ...
});
