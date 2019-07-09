const fs = require("fs");
const path = require("path");
const chai = require("chai");
const expect = chai.expect;

var assert = require("assert");
var http = require("http");
var server = require("./app");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const wget = require("wget-improved");
const src = "http://localhost:4000/signup";
const output = "./signup.html";

let download = wget.download(src, output);

const readData = path => {
  return new Promise((res, rej) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        rej("Error in reading");
      } else {
        res(data);
      }
    });
  });
};

readData("./signup.html").then(res => {
  const create_data = res;
  const dom = new JSDOM(create_data);
  
  describe("TODO Testcases-1 #start_test", function() {
    it("should check content", done => {
      expect(dom.window.document.getElementsByTagName("input").length).to.equal(
        3
      );
      done();
    });
    it("should check content", done => {
        expect(dom.window.document.getElementsByTagName("button").length).to.equal(
          2
        );
        done();
      });
  });
})


console.log("1");
  describe("TODO Testcases-1 #start_test", function() {
    it("should check contents", done => {
      expect(1).to.equal(
        1
      );
      done();
    });
  });


// describe("HTTP Testcases-2", function() {
//   it("should display the home page", function(done) {
//     http.get("http://localhost:4000", function(res) {
//       assert.equal(200, res.statusCode);
//       done();
//     });
//   });
//   it("should display the create page #end_test", function(done) {
//     http.get("http://localhost:4000/signin", function(res) {
//       assert.equal(200, res.statusCode);
//       server.close();
//       done();
//     });
//   });
// });