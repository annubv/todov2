let request = require("supertest");
let app = require("./app");
const assert = require("chai").assert;

var Cookies;

describe("Functional Test <Sessions>:", function() {
  it("should create user session for valid user", function(done) {
    request(app)
      .post("/signin")
      .set("Accept", "application/json")
      .send({ email: "aa@aa.com", password: "123" })
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.status, 302);
        Cookies = res.header["set-cookie"];
        assert.notEqual(Cookies, undefined);
        console.log("The Cookie: " + Cookies);
        done();
      });
  });
  it("should create user session for valid user 2", function(done) {
    request(app)
      .get("/signin")
      .set("Accept", "application/json")
      //.send({ email: "abfsda@aa.com", password: "123" })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        //assert.equal(req.header["cookie"], Cookies);
        //Cookies = res.header["set-cookie"];
        console.log("The Cookie: " + Cookies);
        done();
      });
  });
  it("should create user session for valid user 3", function(done) {
    request(app)
      .post("/signin")
      .set("Accept", "application/json")
      .send({ email: "aaff@aa.com", password: "123" })
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.status, 302);
        Cookies = res.header["set-cookie"];
        assert.equal(Cookies, undefined);
        console.log("The Cookie: " + Cookies);
        done();
      });
  });
  /*   it("should get user session for current user", function(done) {
    var req = request(app).get("/");
    // Set cookie to get saved user session
    req.cookies = Cookies;
    req.set("Accept", "application/json").end(function(err, res) {
      //console.log(session.email);
      assert.equal(res.body.id, "3");
      assert.equal(res.body.name, "Anu");
      assert.equal(res.body.email, "aa@aa.com");
      assert.equal(res.status, 200);
      done();
    });
  }); */
});
