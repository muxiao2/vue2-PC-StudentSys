<template>
    <div class="data-overview">
        <div id="main1"></div>
        <div id="main2"></div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            x1: [],
            y1: []
        };
    },
    created() {
        this.service.get('/data')
        .then(res => {
            if(res.data.status === 200) {
                // console.log(res);
                this.x1 = res.data.data[0]
                this.y1 = res.data.data[1]
                // console.log(this.x1, this.y1);
                // this.draw('main1','大数据班', this.x1, this.y1)
            }
        })
        .catch(err => {
            throw err
        });

        // 处理数据
        this.service.get('/data/data')
        .then(res => {
            if(res.data.status === 200) {
                // console.log(res.data.data);
                let obj = res.data.data
                var arr1 = [], arr2 = []
                for(let key in obj) {
                    arr1.push(key)
                    arr2.push(obj[key])
                }
                // console.log(arr1,arr2);
                this.draw('main1','大数据班', arr1, arr2)
            }
        })
        .catch(err => {
            throw err
        })

        this.service.get('/data/datas')
        .then(res => {
            if(res.data.status === 200) {
                console.log(res.data.data)
                let option = {
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    // data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
                    data: res.data.data.name
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                    saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    data: res.data.data.date
                },
                yAxis: {
                    type: 'value'
                },
                series: res.data.data.arr
                };
                this.draw2('main2', option)
        
            }
        })
        .catch(err => {
            throw err
        })
    },
    // 简单封装重复性图表
    methods: {
        draw(el,title, x, y) {
            // 基于准备好的dom，初始化echarts实例
        var myChart1 = this.$echarts.init(document.getElementById(el));
        // 绘制图表
        myChart1.setOption({
        title: {
            text: title
        },
        tooltip: {},
        xAxis: {
            // data: ['一班', '二班', '三班', '四班', '五班', '六班']
            data: x
        },
        yAxis: {},
        series: [
            {
            name: '人数',
            type: 'bar',
            // data: [55, 67, 70, 46, 52, 85]
            data: y
            },
        ],
    });
    },
    // 灵活封装
       draw2(el,options) {
            var myChart2 = this.$echarts.init(document.getElementById(el));
            myChart2.setOption(options);
        }
    },
    mounted() {
        // 绘制图表
        // var option = {
        // title: {
        //     text: 'Stacked Line'
        // },
        // tooltip: {
        //     trigger: 'axis'
        // },
        // legend: {
        //     data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        // },
        // grid: {
        //     left: '3%',
        //     right: '4%',
        //     bottom: '3%',
        //     containLabel: true
        // },
        // toolbox: {
        //     feature: {
        //     saveAsImage: {}
        //     }
        // },
        // xAxis: {
        //     type: 'category',
        //     boundaryGap: false,
        //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        // },
        // yAxis: {
        //     type: 'value'
        // },
        // series: [
        //     {
        //     name: 'Email',
        //     type: 'line',
        //     stack: 'Total',
        //     data: [120, 132, 101, 134, 90, 230, 210]
        //     },
        //     {
        //     name: 'Union Ads',
        //     type: 'line',
        //     stack: 'Total',
        //     data: [220, 182, 191, 234, 290, 330, 310]
        //     },
        //     {
        //     name: 'Video Ads',
        //     type: 'line',
        //     stack: 'Total',
        //     data: [150, 232, 201, 154, 190, 330, 410]
        //     },
        //     {
        //     name: 'Direct',
        //     type: 'line',
        //     stack: 'Total',
        //     data: [320, 332, 301, 334, 390, 330, 320]
        //     },
        //     {
        //     name: 'Search Engine',
        //     type: 'line',
        //     stack: 'Total',
        //     data: [820, 932, 901, 934, 1290, 1330, 1320]
        //     }
        // ]
        // };
        // this.draw2('main2', option)
        
    },
};
</script>

<style scoped>
.data-overview {
    width: 100%;
    display: flex;
}
.data-overview>#main1,
.data-overview>#main2 {
    width: 45%;
    height: 700px;
}
</style>