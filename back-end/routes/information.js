var express = require('express');
var router = express.Router();
var mdb = require('../libs/config1')

/* GET home page. */
router.get('/', (req, res) => {
    mdb.search('information', req.query, res)
});

router.post('/', (req, res) => {
    mdb.insert('information', req.body, res)

});

router.put('/',(req, res) => {
    const { name, gender, age, birthDate, idNumber, father, mother, homeAddress, inDate, concat } = req.body
    mdb.update('information', { idNumber: req.body.idNumber }, {
            $set: {
                name,
                gender,
                age,
                birthDate,
                idNumber,
                father,
                mother,
                homeAddress,
                inDate,
                concat
            }
    }, res)
})

router.delete('/', (req, res) => {
//     console.log(req.query)
    mdb.remove('information', req.query, res)
})

module.exports = router;
