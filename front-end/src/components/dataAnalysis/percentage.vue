<template>
  <div class="data-overview">
    <div id="map">
      <!-- 标题 -->
      <div class="maptitle">{{ this.title }}</div>
      <!-- 可视化图表 -->
      <ul class="mapUl">
        <!-- <li class="mapli" v-for="(item, index) in 6" :key="index">
          {{ index + 1 }}
          <div :id="mapnum" class="mapdiv"></div>
        </li> -->
        <li class="mapli">
          01
          <div id="map1" class="mapdiv"></div>
        </li>
        <li class="mapli">
          02
          <div id="map2" class="mapdiv"></div>
        </li>
        <li class="mapli">
          03
          <div id="map3" class="mapdiv"></div>
        </li>
        <li class="mapli">
          04
          <div id="map4" class="mapdiv"></div>
        </li>
        <li class="mapli">
          05
          <div id="map5" class="mapdiv"></div>
        </li>
        <li class="mapli">
          06
          <div id="map6" class="mapdiv"></div>
        </li>
      </ul>
      <!-- 时间 -->
      <div class="datebox">当前系统时间: {{ this.newdate }}</div>
      <fenye></fenye>
      <!-- <fenyetwo></fenyetwo> -->
    </div>
  </div>
</template>

<script>
import fenye from "../common/fenye.vue";
import fenyetwo from "../common/fenyetwo.vue";
export default {
  data() {
    return {
      newdate: this.getCurrentTime(),
      Nowtimer: null,
      title: "实时监控",
      mapnum: "map",
      arr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    };
  },
  components: {
    fenye,
    fenyetwo,
  },
  created() {
    this.getCurrentTime();
  },
  methods: {
    getCurrentTime() {
      //获取当前时间并打印
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      _this.gettime = yy + "-" + mm + "-" + dd + " " + hh + ":" + mf + ":" + ss;
      //   console.log(_this.gettime);
      return _this.gettime;
    },
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    //   时间
    this.Nowtimer = setInterval(() => {
      this.newdate = this.getCurrentTime(); // 2.生命周期挂载完成时，使用定时器实时修改数据nowData
    }, 1000);

    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    const percent = 78; // 数值
    var option = {
      backgroundColor: "rgba(255, 255, 255, 1)",
      title: {
        text: "",
        left: "center",
        top: "45%",
        textStyle: {
          color: "rgba(31, 196, 225, 0.6)",
          fontSize: 30,
        },
        subtext: `${percent} %`,
        subtextStyle: {
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: 18,
        },
      },
      polar: {
        radius: ["50%", "60%"],
        center: ["50%", "50%"],
      },
      // 极坐标角度轴
      angleAxis: {
        min: 0,
        max: 100,
        // startAngle: 0,
        // endAngle: -0,
        clockwise: true,
        show: false, // 隐藏刻度线
      },
      // 极坐标径向轴
      radiusAxis: {
        type: "category",
        // 隐藏极坐标轴线
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      tooltip: {
        show: false,
        formatter: (val) => {
          return `${val.seriesName}: ${val.data}%`;
        },
        backgroundColor: "rgba(190, 196, 225, 0.7)",
        borderColor: "rgba(31, 196, 225, 0.6)",
      },
      series: [
        {
          // 进度条
          type: "bar",
          name: "占比",
          coordinateSystem: "polar",
          // 设置柱子背景灰色，需开启showBackground才能显示backgroundStyle
          showBackground: true,
          backgroundStyle: {
            // color: 'rgba(14, 61, 128,0.3)',
            color: "rgba(0,0,0, 0.15)",
          },
          // 两端设置圆角
          roundCap: true,
          itemStyle: {
            color: {
              x: 0,
              y: 0,
              x1: 0,
              y1: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(190, 196, 225,0.9)",
                },
                {
                  offset: 1,
                  color: "rgba(0,0,255,1)",
                },
              ],
            },
          },
          data: [percent],
        },
        {
          // 刻度线设置
          type: "gauge",
          name: "",
          radius: 174,
          center: ["50%", "50%"],
          startAngle: 90,
          endAngle: -270,
          silent: false,
          splitNumber: 16,
          splitLine: {
            length: 16,
            // distance: 30,
          },
          // 是否显示仪表盘数据
          detail: {
            show: false,
          },
          pointer: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
          },
          data: [percent],
          z: 10,
        },
      ],
    };
    // 可视化图表
    for(var i = 0; i < arr.length; i++) {
      console.log(111);
      // var myChart = this.$echarts.init(document.getElementById("map" + i));
      // console.log(myChart);
    }
    var myChart1 = this.$echarts.init(document.getElementById("map1"));
    var myChart2 = this.$echarts.init(document.getElementById("map2"));
    var myChart3 = this.$echarts.init(document.getElementById("map3"));
    var myChart4 = this.$echarts.init(document.getElementById("map4"));
    var myChart5 = this.$echarts.init(document.getElementById("map5"));
    var myChart6 = this.$echarts.init(document.getElementById("map6"));
    setInterval(function () {
      // const random = +(Math.random() * 60).toFixed(2);
      const random = [12, 24, 48, 96, 84, 72, 60];
      const index = Math.floor(Math.random() * random.length);
      myChart1.setOption({
        title: {
          subtext: `${random[index]} %`,
        },
        series: [
          {
            data: [
              {
                value: random[index],
              },
            ],
          },
          {
            data: [
              {
                value: random[index],
              },
            ],
          },
        ],
      });
      myChart2.setOption({
        title: {
          subtext: `${random[index]} %`,
        },
        series: [
          {
            data: [
              {
                value: random[index],
              },
            ],
          },
          {
            data: [
              {
                value: random[index],
              },
            ],
          },
        ],
      });
      myChart3.setOption({
        title: {
          subtext: `${random[index]} %`,
        },
        series: [
          {
            data: [
              {
                value: random[index],
              },
            ],
          },
          {
            data: [
              {
                value: random[index],
              },
            ],
          },
        ],
      });
      myChart4.setOption({
        title: {
          subtext: `${random[index]} %`,
        },
        series: [
          {
            data: [
              {
                value: random[index],
              },
            ],
          },
          {
            data: [
              {
                value: random[index],
              },
            ],
          },
        ],
      });
      myChart5.setOption({
        title: {
          subtext: `${random[index]} %`,
        },
        series: [
          {
            data: [
              {
                value: random[index],
              },
            ],
          },
          {
            data: [
              {
                value: random[index],
              },
            ],
          },
        ],
      });
      myChart6.setOption({
        title: {
          subtext: `${random[index]} %`,
        },
        series: [
          {
            data: [
              {
                value: random[index],
              },
            ],
          },
          {
            data: [
              {
                value: random[index],
              },
            ],
          },
        ],
      });
    }, 2000);
    myChart1.setOption(option);
    myChart2.setOption(option);
    myChart3.setOption(option);
    myChart4.setOption(option);
    myChart5.setOption(option);
    myChart6.setOption(option);
  },
  //vue实例销毁前执行的方法
  beforeDestroy() {
    if (this.Nowtimer) {
      clearInterval(this.Nowtimer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
};
</script>

<style scoped>
.data-overview {
  width: 100%;
  display: flex;
}
.data-overview > #map {
  width: 100%;
  height: 800px;
  border: 5px solid #000;
  /* background-color: #000; */
}
.data-overview > #map > .mapUl {
  width: 100%;
}
.data-overview > #map > .maptitle {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
}
.data-overview > #map > .datebox {
  width: 500px;
  height: 40px;
  position: absolute;
  /* border: 1px solid #000; */
  left: 50%;
  margin-left: -250px;
  text-align: center;
  line-height: 40px;
  top: 85%;
  font-size: 20px;
}
.data-overview > #map > .mapUl > .mapli {
  display: block;
  float: left;
  width: 300px;
  height: 400px;
  text-align: center;
  line-height: 300px;
  background: url("../../assets/bg.jpg") no-repeat 70px 20px / 160px 240px;
}
.data-overview > #map > .mapUl > .mapli > .mapdiv {
  width: 300px;
  height: 400px;
  position: relative;
  top: -50px;
}
</style>