const mysql = require("mysql");
const db_config = require("./db_config");

const helper = {

  isDuplicated(nickname, cb){
    const sql = "SELECT * From nicknames WHERE nickName" + "=?";
    const sqlValue = [nickname];

    const pool = global.pool ? global.pool :this.createConnectionPool(
      db_config.host,
      db_config.username,
      db_config.password,
      db_config.port,
      db_config.database,db_config.pool);

    pool.getConnection(function(err,connection){
      if(err){
        console.log(err);
      }
      connection.query(sql,sqlValue,function(err, result){
        if(err){
          console.log(err);
        }
        if(result.length <= 0){
          console.log('nickname ok')
        } else {
          cb();
        }
      })
    });

  },




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
};

module.exports = helper;
