var express = require('express');
const { Db } = require('mongodb');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let arr = []
    for(let i = 0; i < 85; i++) {
        let obj = {
            name: 'Name' + i,
            class: 'class01' ,
            due: 100,
            actual: 85,
            attendance: '85%',
            attendanceRanking: 1,
            attendanceRate: 'Excellent'
        }
        arr.push(obj)
    }
    // 添加多条数据
    db.collection('attendance').insertMany(arr, (err, result) => {
        if(err) throw err
        res.send({ status:200, msg: '数据新增成功' })
    })
});

// // 请求数据接口
// router.get('/find', function(req,res) {
//     let data = db.collection('attendance').find()
//     // console.log(data);
//     data.toArray((err, result) => {
//         // console.log(result);
//         res.send({ status: 200, data: result })
//     })
//     // res.send('查找数据成功')
// });

// // 筛选接口
// router.get('/search', (req,res) => {
//     // console.log(req.query);
//     let data = db.collection('attendance').find(req.query)
//     data.toArray((err,result) => {
//         // console.log(result);
//         if(result.length > 0) {
//             res.send({ status:200, data: result })
//         }else {
//             res.send({ data:[], msg: 'Empty data or wrong field' })
//         }
//     })
//     // res.send('查找成功')
// })

router.get('/find', async (req, res) => {
    let data = db.collection('attendance').find(req.query).limit(20)
    // 获取总条数
    let total = await db.collection('attendance').find().count()
    // console.log(total);
    data.toArray((err, result) => {
        if(err) throw err
        result.length > 0 ? res.send({ status:200, data: result,total: total }) : res.send({ data:[], msg: 'Empty data or wrong fieldEmpty data or wrong field!' })
    })
})
// 筛选find,skip,limit
router.get('/page', async (req,res) => {
    let skip = Number((req.query.currentPage - 1)) * Number(req.query.pageSize)
    let total = await db.collection('attendance').find().count()
    let data = db.collection('attendance').find().limit(Number(req.query.pageSize)).skip(skip)
    data.toArray((err,result) => {
        if(err) throw err
        res.send({ status:200, data: result, total: total })
    })
    
    // let data = db.collection('attendance').find().skip(10).limit(10)
    // data.toArray((err,result) => {
    //     res.send({ status:200, msg: '查询成功' ,data: result})
    // })
})

module.exports = router;
