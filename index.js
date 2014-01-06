
/*!
 *
 * die
 *
 * express handler to kill your node process
 *
 * MIT
 *
 */

exports = module.exports = die;

exports.html =
  '<html>'
+   '<head>'
+     '<meta http-equiv="refresh" content="5;url=/">'
+   '</head>'
+   '<body>'
+     '<h2>Farewell, and may we meet again in happier times...</h2>'
+     '<p><a href="/">back home</a></p>'
+   '</body>'
+ '</html>'
;

exports.timeout = 500;

exports.kill = process.exit;

function die(req, res){
  res.send(exports.html);
  setTimeout(function(){
    exports.kill();
  }, exports.timeout);
}
