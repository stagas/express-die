
/*!
 *
 * die
 *
 * express handler to kill your node process
 *
 * MIT
 *
 */

var html =
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

module.exports = function(req, res){
  res.send(html);
  setTimeout(function(){
    process.exit();
  }, 500);
};
