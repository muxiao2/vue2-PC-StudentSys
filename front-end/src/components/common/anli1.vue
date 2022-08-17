<template>
<!-- 测试用的，不投入使用该页面 -->
  <a-card :bordered="false">
    <div class="data-overview">
      <div id="map">
        <!-- 标题 -->
        <div class="maptitle">{{ this.title }}</div>
<!--        点击刷新-->
        <span role="img" aria-label="redo" class="anticon anticon-redo aicons"@click="() => openNotificationWithIcon('success')">
          <svg focusable="false" class="aiconsx" data-icon="redo" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"></path></svg></span>
        <!-- 可视化图表 -->
        <ul class="mapUl">
          <li class="mapli" v-for="(item,index) in Number(pagelength)" :key="index">
            <span class="spannumber">0{{ index + 1 }}</span>
            <div class="mapdiv" :id="mapid[index]">
              <a-progress class="points" type="circle" :percent="percentnum[index]" />
            </div>
          </li>
        </ul>
        <!-- 时间 -->
        <div class="datebox">当前时间: {{ this.newdate }}</div>

<!--      <a-pagination v-model:current="current" :total="50" show-less-items />-->
<!--      <div v-for="(item, index) in showPage" :key="index">{{item.id}}</div>-->
      <div class="fenye">
        <div class="navbar">
          <div class="pravPage" @click="prav">
            <i aria-label="图标: left" class="anticon anticon-left"
            ><svg
              viewBox="64 64 896 896"
              data-icon="left"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              class=""
            >
              <path
                d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
              ></path></svg
            ></i>
          </div>
          <div
            class="pages"
            v-for="(item, index) in getShowPage"
            :key="index"
            @click="page(item)"
            :class="item == cur ? 'activeone' : ''"
          >
            {{ item }}
          </div>
          <div
            class="pages"
            v-if="this.conpages != this.getShowPage[this.getShowPage.length - 1]"
          >
            ...
          </div>
          <!--如果删除这行多就没有省略号余页码隐藏-->
          <div class="nextPage" @click="next">
            <i aria-label="图标: right" class="anticon anticon-right"
            ><svg
              viewBox="64 64 896 896"
              data-icon="right"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              class=""
            >
              <path
                d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
              ></path></svg
            ></i>
          </div>
        </div>
      </div>
      </div>
    </div>

  </a-card>
</template>

<script>

import '@/assets/less/TableExpand.less'
import {mixinDevice} from '@/utils/mixin'
import {JeecgListMixin} from '@/mixins/JeecgListMixin'
import RealTimeMonitoringModal from './modules/RealTimeMonitoringModal'
import {postAction} from "@api/manage";
const arr = [
    {
      id: "NYMM01001021",
      createBy: null,
      createTime: "2022-06-29 16:21:46",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "02",
      barrelId: "1",
      capacity: "01",
    },
    {
      id: "NYMM01001015",
      createBy: null,
      createTime: "2022-06-29 16:21:39",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "5",
      capacity: "03",
    },
    {
      id: "NYMM01001014",
      createBy: null,
      createTime: "2022-06-29 16:21:36",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "4",
      capacity: "03",
    },
    {
      id: "NYMM01001013",
      createBy: null,
      createTime: "2022-06-29 16:21:34",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "3",
      capacity: "03",
    },
    {
      id: "NYMM01001012",
      createBy: null,
      createTime: "2022-06-29 16:21:32",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "2",
      capacity: "03",
    },
    {
      id: "NYMM01001011",
      createBy: null,
      createTime: "2022-06-29 16:18:53",
      updateBy: null,
      updateTime: "2022-06-29 16:18:54",
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "1",
      capacity: "03",
    },
    {
      id: "NYMM01001021",
      createBy: null,
      createTime: "2022-06-29 16:21:46",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "02",
      barrelId: "1",
      capacity: "01",
    },
    {
      id: "NYMM01001015",
      createBy: null,
      createTime: "2022-06-29 16:21:39",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "5",
      capacity: "03",
    },
    {
      id: "NYMM01001014",
      createBy: null,
      createTime: "2022-06-29 16:21:36",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "4",
      capacity: "03",
    },
    {
      id: "NYMM01001013",
      createBy: null,
      createTime: "2022-06-29 16:21:34",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "3",
      capacity: "03",
    },
    {
      id: "NYMM01001012",
      createBy: null,
      createTime: "2022-06-29 16:21:32",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "2",
      capacity: "03",
    },
    {
      id: "NYMM01001011",
      createBy: null,
      createTime: "2022-06-29 16:18:53",
      updateBy: null,
      updateTime: "2022-06-29 16:18:54",
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "1",
      capacity: "03",
    },
    {
      id: "NYMM01001021",
      createBy: null,
      createTime: "2022-06-29 16:21:46",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "02",
      barrelId: "1",
      capacity: "01",
    },
    {
      id: "NYMM01001015",
      createBy: null,
      createTime: "2022-06-29 16:21:39",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "5",
      capacity: "03",
    },
    {
      id: "NYMM01001014",
      createBy: null,
      createTime: "2022-06-29 16:21:36",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "4",
      capacity: "03",
    },
    {
      id: "NYMM01001013",
      createBy: null,
      createTime: "2022-06-29 16:21:34",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "3",
      capacity: "03",
    },
    {
      id: "NYMM01001012",
      createBy: null,
      createTime: "2022-06-29 16:21:32",
      updateBy: null,
      updateTime: null,
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "2",
      capacity: "03",
    },
    {
      id: "NYMM01001011",
      createBy: null,
      createTime: "2022-06-29 16:18:53",
      updateBy: null,
      updateTime: "2022-06-29 16:18:54",
      sysOrgCode: null,
      address: "01001",
      bucketStationId: "01",
      barrelId: "1",
      capacity: "03",
    },
  ];
export default {
  name: 'RealTimeMonitoringList',
  //mixins:[JeecgListMixin, mixinDevice],
  components: {
    RealTimeMonitoringModal
  },
  data () {
    return {
      //分页
      mapid: ["map1","map2","map3","map4","map5","map6"],
      conpages: "", //总页数
      cur: 1, //当前页
      pageSize: 3, //每页要展示数据条数
      showPage: [], //每页展示的内容
      pagelength: "",//每页的长度
      porps: [],// 数据传进来
      percentnum: [],//进度条的值

      description: '实时监控管理页面',
      newdate: this.getCurrentTime(),
      Nowtimer: null,
      Nowartst: null,
      flagnum: 2,
      title: "实时监控",
      url: {
        list: "/monitoring/realTimeMonitoring/list",
        deleteBatch: "/monitoring/realTimeMonitoring/deleteBatch",
        exportXlsUrl: "/monitoring/realTimeMonitoring/exportXls",
        importExcelUrl: "monitoring/realTimeMonitoring/importExcel",
        findInformation :"/monitoring/realTimeMonitoring/findCapacity",
        stationNum:"/monitoring/realTimeMonitoring/stationNum"
      },
      dictOptions:{},
      superFieldList:[],
    }
  },
  created() {
    this.findCapcity();
    this.findStationNum();
    this.getCurrentTime();
    this.rendererData();
    this.changePoints();
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    },
    //计算能看到几页
    getShowPage: function () {
      //计算指定显示页码数，这里以4页为例
      let arrList = [];
      if (this.conpages > 4) {
        for (let i = 0; i < 4; i++) {
          arrList[i] = i + 1;
        }
        return arrList;
      } else {
        for (let i = 0; i < this.conpages; i++) {
          arrList[i] = i + 1;
        }
        return arrList;
      }
    },
  },
  methods: {
    //获取并处理数据
    findCapcity(){
      postAction(this.url.findInformation).then(res => {
        // console.log(res)
        this.porps = res;
        // console.log(this.porps)
        // this.showPage.length = this.pagelength;
        this.rendererData();
      })
    },
    findStationNum(){
      postAction(this.url.stationNum).then(res => {
        // console.log(res)
        this.conpages = res.length; //总页数
        this.pagelength = res[this.cur - 1].ct; //当前页有几条数据
        // console.log(this.pagelength);
        this.flagnum --;
        if(this.flagnum === 1) {
          // this.findStationNum();
          // this.findCapcity();
          this.page(this.cur);
        }else {
          this.flagnum = 2;
        }

      })
    },
    rendererData() {
      // console.log(this.porps);
      var newdataarr = this.porps.filter((item) => {
        return item.bucketStationId != this.cur
      });
      // console.log(newdataarr)
      //封装去重数组函数
      function arraydiff(a,b) {
        for(var i = 0; i < b.length; i++) {
          for(var j = 0; j < a.length; j++) {
            if(a[j] === b[i]) {
              a.splice(j, 1)
              j = j - 1
            }
          }
        }
        return a
      }
      this.showPage = (arraydiff(this.porps, newdataarr)).reverse();
      // console.log(this.showPage);
      for(var m = 0; m < this.showPage.length; m++) {
        // console.log(this.showPage[m].capacity)
        if(this.showPage[m].capacity === "01") {
          this.percentnum.push(25);
        }else if(this.showPage[m].capacity === "02") {
          this.percentnum.push(50);
        }else if(this.showPage[m].capacity === "03") {
          this.percentnum.push(85);
        }else if(this.showPage[m].capacity === "04") {
          this.percentnum.push(100);
        }else {
          this.percentnum.push(0);
          break;
        }
        // console.log(this.percentnum)
      }

    },

    //分页
    page(item) {
      this.cur = item; //当前页
      if (
        this.cur == this.getShowPage[this.getShowPage.length - 1] &&
        this.conpages > this.cur
      ) {
        for (let i = 0; i < this.getShowPage.length; i++) {
          if (
            this.conpages - this.getShowPage[this.getShowPage.length - 1] <
            2
          ) {
            this.getShowPage[i] = this.getShowPage[i] + 1;
          } else {
            this.getShowPage[i] = this.getShowPage[i] + 2;
          }
        }
      }
      if (this.cur == this.getShowPage[0] && this.cur > 1) {
        for (let i = 0; i < this.getShowPage.length; i++) {
          //这里是判断到头了
          if (this.cur == 2) {
            this.getShowPage[i] = this.getShowPage[i] - 1;
          } else {
            this.getShowPage[i] = this.getShowPage[i] - 2;
          }
        }
      }
      // var list = (this.cur - 1) * this.pageSize; //每去一组数据的第一个索引s
      // this.showPage = this.porps.slice(list, list + this.pageSize); //从总数据中取出每页的数据
      // console.log(this.showPage)
      //阻止死循环
      this.flagnum --;
      if(this.flagnum === 1) {
        this.findStationNum();
        this.findCapcity();
      }else {
        this.flagnum = 2;
      }
      this.changePoints();
    },
    prav() {
      if (this.cur != 1) {
        this.cur--;
        this.page(this.cur);
        this.findStationNum();
        this.findCapcity();
        this.changePoints();
      }
    },
    next() {
      if (this.cur < this.conpages) {
        this.cur++;
        this.page(this.cur);
        this.findStationNum();
        this.findCapcity();
        this.changePoints();
      }
    },
    //点击刷新
    openNotificationWithIcon(type) {
      this.$notification[type]({
        message: '刷新成功',
        duration: 1,
      });
      console.log(1)
      clearInterval(this.Nowartst);
      this.findStationNum();
      this.findCapcity();
      this.changePoints();
      console.log(window.parent)
      window.parent.location.assign(location);
    },
    //时间
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
    //修改100的图标
    changePoints() {
      var points = document.getElementsByClassName("points");
      // console.log(points);
      for(var i = 0; i < points.length; i++) {
        if(points[i].children[0].children[1].children.length != 0) {
          points[i].children[0].children[1].innerHTML = "100%";
        }
      }
    }

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    //   时间
    this.Nowtimer = setInterval(() => {
      this.newdate = this.getCurrentTime(); // 2.生命周期挂载完成时，使用定时器实时修改数据nowData
      this.changePoints();
    }, 1000);
    this.Nowartst = setInterval(() =>  {
      this.findStationNum();
      this.findCapcity();
    },300000);
  },
  //vue实例销毁前执行的方法
  beforeDestroy() {
    if (this.Nowtimer) {
      clearInterval(this.Nowtimer); // 在Vue实例销毁前，清除我们的定时器
    }
    if(this.Nowartst) {
      clearInterval(this.Nowartst);
    }

  },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
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
  top: 70%;
  font-size: 20px;
}
.data-overview > #map > .mapUl > .mapli {
  display: block;
  float: left;
  width: 15%;
  height: 50%;
  text-align: center;
  line-height: 300px;
  margin-left: 10px;
  background: url("../../assets/bg.jpg") no-repeat 10px 20px / 160px 240px;
}
.data-overview > #map > .mapUl > .mapli > .spannumber {
  display: block;
  position: relative;
  left: 0;
  top: 0;
  font-size: 20px;
  font-weight: 600;
}
.data-overview > #map > .mapUl > .mapli > .mapdiv {
  width: 200px;
  height: 200px;
  position: relative;
  top: -50px;
}
/*分页*/
.fenye {
  position: absolute;
  left: 65%;
  top: 700px;
  background-color: #00DB00;
  z-index: 100;
}
.navbar {
  position: relative;
  left: 0;
  top: 100%;
  /*width: 500px;*/
  height: 40px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.Page {
  width: 80px;
  height: 40px;
  text-align: center;
  color: black;
  line-height: 40px;
  background-color: #f4f4f5;
  margin: 0 5px;
}
.pages {
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 2px;
  margin: 0 5px;
  background-color: #f4f4f5;
  text-align: center;
  line-height: 40px;
}
.activeone {
  width: 40px;
  height: 40px;
  border: 1px solid #409eff;
  border-radius: 5px;
  margin: 0 5px;
  background-color: #409eff;
  text-align: center;
  line-height: 40px;
  color: #fff;
}
.nav div:hover {
  cursor: pointer;
}
.pravPage {
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s;
}
.nextPage {
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s;
}
.aicons {
  width: 40px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  left: 55%;
  top: 5%;
  border-radius: 50%;
}
.aicons:active .aiconsx {
  transform: rotate(0);
  transition: 0s;
}

.aicons > .aiconsx {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transform: rotate(360deg);
  transition: .5s;
}
</style>