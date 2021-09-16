var express = require('express');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const db = require('./database/index');
const db_config = require('./database/db_config');
const helper = require('./database/helper');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(session({
  name:"sessionId",
  secret:"la10018__12Aty",
  cookie:{maxAge: 9000000},
  saveUninitialized: false,
  resave: false
}));

path.join(__dirname, 'views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

global.users = [];

app.post('/sign_up',function(req,res){
  //signup
  const n = req.body.nickName;

  const sql = "SELECT * From nicknames WHERE nickName" + "=?";
  const sqlValue = [n];

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
        const Sequelize = require('sequelize');
        const sequelize = new Sequelize(db_config.database, db_config.username, db_config.password,  {
          host: db_config.host,    //数据库地址,默认本机
          port:db_config.port,
          dialect: db_config.dialect,
          pool: db_config.pool,
        });
        const nickname = sequelize.define('nickname', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },

          nickname:{
            type: Sequelize.STRING,
            allowNull: false
          }
        }, {
          timestamps: false
        });
        nickname.create({
          nickname: n
        }).then((data) => {
          const user = {
            nickName:n
          };
          const token = jwt.sign({user},'app secrete key');
          res.json({
            error:0,
            token:token,
            nickname:n
          });

        });
      } else {
        res.send({
            error:1,
            msg:'duplicated'
        });
      }
    })
  });

});






app.post('/sign_in',function (req,res) {
  const n = req.body.nickName;
  const sql = "SELECT * From nicknames WHERE nickName" + "=?";
  const sqlValue = [n];

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
        //not exist
        res.send({
          error:1,
          msg:'error'
        });
      } else {
        //exist
        let violation = false;
        if(global.users.length > 0){
          for(let i = 0; i < global.users.length; i++){
            if(n === global.users[i]){
              violation = true;
              break;
            }
          }
        }
        if(!violation){
          global.users.push(n);
          const user = {
            nickName:n
          };
          const token = jwt.sign({user},'app secrete key');
          res.json({
            error:0,
            token:token,
            nickname:n
          });
        }else{
          res.send({
            error:1,
            msg:'violation'
          });
        }
      }
    })
  });
});


app.get('/page/protected',checkToken,function (req,res) {
  jwt.verify(req.token,'app secrete key',function (err, data) {
    if(err){
      console.log(err);
      res.sendStatus(403);
    }else{
      res.json({'msg':'welcome'});
    }
  });
});



function checkToken(req,res,next){
  const beareHeader = req.headers['authorization'];
  if(typeof beareHeader !== 'undefined'){
    const bearer = beareHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  }else{
    res.sendStatus(403);
  }
}


//初始化连接池
global.pool = db.createConnectionPool(db_config.host, db_config.username, db_config.password, db_config.port, db_config.database,db_config.pool);




const server = require('http').createServer(app);

server.listen(3001,function (){
  console.log("nodes running on 3001...");
});

module.exports = app;
