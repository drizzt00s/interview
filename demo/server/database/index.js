const mysql = require("mysql");
const db_config = require("./db_config");

const db = {
  createConnectionPool:function (host,user,password,port,database,connectionLimit){
    const connectionPool = mysql.createPool({
      host:host,
      user:user,
      password:password,
      port:port,
      database:database,
      connectionLimit:connectionLimit
    });
    return connectionPool;
  },


  connect:function(connection){
    connection.connect(function(err){
      if(err){
        throw err;
      }
    });
  }

};
module.exports = db;

