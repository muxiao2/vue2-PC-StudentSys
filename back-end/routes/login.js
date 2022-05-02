var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send('login');
  let data = { username: 'muxiao', password: 'muxiao123'}
  // 插入数据库
  db.collection('admin').insertOne(data, (err, result) => {
    if(err) throw err
    res.send('新增管理员成功')
  })
});

router.post('/', function(req, res, next) {
    // console.log(req.body);
    // 后端做校验
    if(req.body.username && req.body.password) {
      // 数据库查找
      let data = db.collection('admin').find();
      // console.log(data);
      data.toArray((err,result) => {
        // console.log(result);
        let pass = result.filter(currentValue => {
          // console.log(currentValue);
          return currentValue.username === req.body.username && currentValue.password === req.body.password
          // if(item.username === req.body.username && item.password === req.body.password) {
          //   res.send({ status: 200, msg: '登陆成功' , username: item.username })
          // }
          // else {
          //   res.send({ status:400, msg: '用户名或密码错误' })
          // }
        })
        // console.log(pass);
        pass.length > 0 ? res.send({ status:200,msg: '登陆成功', username: pass[0].username }) : res.send({ status:400,msg: '用户名或密码错误' })
      });
    }else {
      res.send({ status:401, msg:'无权限用户'});
    }
    
  });

module.exports = router;
