var express = require("express"),
    mysql   = require('mysql'),
    app     = express();
    
var connection = mysql.createConnection({
    host     : 'localhost',
    user     :  'kaloy',
    database : 'join_us'
});
    
app.get("/", function(req, res){
    // Find count of users in Db
    var q = "SELECT COUNT(*) AS count FROM users";
    connection.query(q, function(err, results){
        if (err) throw err;
        var count = results[0].count;
        res.send("We have " + count + " users in our db");
    });
});


app.listen(8080, function() {
    console.log('App listening on port 8080!');
});