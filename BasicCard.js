var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "myPlaylistDB"
})
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadID);

    /* 
        HINT: Remember that you can call specific data using SQL commands we went over last class. 
        If you are having trouble, make sure to look into SQL commands once more.
         BONUS: Use 'placeholder' values or string concatenation to build a MySQL query which allows you to 
         change pieces of the query on the fly (e.g. using a variable to build the WHERE clause, instead of a static string).*/

    connection.query("SELECT * FROM myPlaylist", function(err, result, fields) {
            if (err) throw err;
            console.log(result);

            //connection.connect (function(err){
            //  if (err) throw err;
            // console.log
        })
        // SELECT CONCAT(category,'--> ',country)
        //FROM myPlaylist; 

});


connection.end();