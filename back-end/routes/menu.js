var express = require('express');
var router = express.Router();
var mdb = require('../libs/config1')

/* GET home page. */
router.get('/', function(req, res) {
    let menu = {
        path: '/students',
        name: 'Data Analysis',
        iconClass:'fas fa-database',
        component: '@/components/Students',
        children: [
            {
            path: '/dataAnalysis/dataOverview',
            name: 'Data Overview',
            iconClass: 'fas fa-chart-line',
            component:'@/components/dataAnalysis/DataOverview',
            },
            {
            path: '/dataAnalysis/mapData',
            name: 'Map Data',
            iconClass: 'fas fa-map-marker-alt',
            component: '@/components/dataAnalysis/MapData',
            },
            {
            path: '/dataAnalysis/travelMap',
            name: 'Travel Map',
            iconClass: 'fas fa-map-pin',
            component: '@/components/dataAnalysis/TravelMap',
            },
        ]
        }
    mdb.insert('menu', menu, res)
    res.send({ status:200, msh: 'your information added successfully' })
});

// 请求数据接口
router.get('/menu',(req,res) => {
    mdb.search('menu', {}, res)
})

module.exports = router;
