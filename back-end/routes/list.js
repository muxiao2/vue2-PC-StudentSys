var express = require('express');
const { Db } = require('mongodb');
var router = express.Router();

/* GET home page. */
router.get('/',async function(req, res) {
    // console.log(req.query);
    let total = await db.collection('list').find().count()
    let skip = (Number(req.query.currentPage - 1) * Number(req.query.pageSize))
    let data = db.collection('list').find(req.query.name ? req.query : {}).limit(Number(req.query.pageSize)).skip(skip || 0)
    data.toArray((err, result) => {
        // console.log(result);
        if(err) throw err
        res.send({ status:200, data: result, total: total })
    })
});
router.post('/', (req, res, ) => {
    let data = req.body
    db.collection('list').insertOne(data,(err,result) => {
        if(err) throw err
        res.send({ status:200, msg: 'Description a adding new data succeeded' })
    })
});

// 修改
router.put('/', (req, res) => {
    // 解构数据
    const { gender, name ,age, studentId, className, state, address, concat } = req.body
    db.collection('list').updateOne({ studentId: req.body.studentId },
        {
            $set: {
                gender,
                name,
                age,
                studentId,
                className,
                state,
                address,
                concat,
            }    
        },err => {
            if(err) throw err
            res.send({ status:200, msg: 'Data Modification succeeded' })
        })
})

// 删除
router.delete('/',(req,res) => {
    db.collection('list').remove(req.query, (err, result) => {
        if(err) throw err
        res.send({ status:200, msg: `Delete ${req.query.name} information has succeed!` })
    })
})


module.exports = router;
