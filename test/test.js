
/**
 * Test.
 */

var assert = require('assert');
var request = require('superagent');
var spawn = require('child_process').spawn;

var child = spawn('node', [__dirname + '/fixtures/server.js']);

child.stdout.setEncoding('utf8');

child.stdout.once('data', function(data){
  console.log(data);
  console.log('testing /');
  request.get('http://localhost:3555/').end(function(res){
    assert('Hello, there!' == res.text);
    console.log('pass, testing /die');
    request.get('http://localhost:3555/die').end(function(res){
      assert(200 == res.status);
      console.log('pass, testing / again');
      setTimeout(function(){
        request.get('http://localhost:3555/').end(function(err, res){
          assert.throws(err);
          console.log('pass');
          console.log('ALL OK');
        });
      }, 1000);
    });
  });
});
