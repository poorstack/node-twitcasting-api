const test = require("ava");
const { Client } = require("../dist/Client/Client");

test("Client constructor", t => {
  t.throws(() => {
    const client = new Client();
  });

  t.throws(() => {
    const client = new Client({});
  });

  t.throws(() => {
    const client = new Client({
      clientId: 123
    });
  });

  t.throws(() => {
    const client = new Client({
      clientId: "xxxxx"
    });
  });

  t.throws(() => {
    const client = new Client({
      clientSecret: "xxxxx"
    });
  });

  t.notThrows(() => {
    const client = new Client({
      clientId: "xxxxx",
      clientSecret: "xxxxxx"
    });
  });

  t.notThrows(() => {
    const client = new Client({
      accessToken: "xxxxxx"
    });
  });
});
