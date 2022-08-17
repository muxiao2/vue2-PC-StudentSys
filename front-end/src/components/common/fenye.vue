<template>
<!-- 测试用的，不投入使用该页面 -->
  <div id="app">
    <!-- <div class="box">
      <div class="item" v-for="(item, index) in showPage">{{ item }}</div>
    </div> -->
    <div class="nav">
      <div class="pravPage" @click="prav">上一页</div>
      <div
        class="pages"
        v-for="(item, index) in getShowPage"
        :key="index"
        @click="page(item)"
        :class="item == cur ? 'active' : ''"
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
      <div class="nextPage" @click="next">下一页</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conpages: "", //总页数
      cur: 1, //当前页
      pageSize: 6, //每页要展示数据条数
      showPage: [], //每页展示的内容
      porps: [
        "小鼠1",
        "小猫2",
        "小狗3",
        "小花4",
        "小草5",
        "小树6",
        "小明7",
        "小李8",
        "小王9",
        "我10",
        "小鼠11",
        "小猫12",
        "小狗13",
        "小花14",
        "小草15",
        "小树16",
        "小明17",
        "小李18",
        "小王19",
        "我20",
        "小鼠21",
        "小猫22",
        "小狗23",
        "小花24",
        "小草25",
        "小树26",
        "小明27",
        "小李28",
        "小王29",
        "我30",
        "小鼠31",
        "小猫32",
        "小狗33",
        "小花34",
        "小草35",
        "小树36",
        "小明37",
        "小38",
        "小王39",
        "我40",
      ], //总数据
    };
  },
  computed: {
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
  created() {
    this.conpages = Math.ceil(this.porps.length / this.pageSize); //求总页数，Math.ceil()方法 可以对数进行上舍入
    this.page(this.cur);
  },
  methods: {
    page(item) {
      this.cur = item; //当前页
      if (
        this.cur == this.getShowPage[this.getShowPage.length - 1] && this.conpages > this.cur
      ) {
        for (let i = 0; i < this.getShowPage.length; i++) {
          if (
            this.conpages - this.getShowPage[this.getShowPage.length - 1] <
            2
          ) {
            this.getShowPage[i] = this.getShowPage[i] + 1;
          } else {
            this.getShowPage[i] = this.getShowPage[i] + 2;
          }console.log();
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
      var list = (this.cur - 1) * this.pageSize; //每去一组数据的第一个索引
      this.showPage = this.porps.slice(list, list + this.pageSize); //从总数据中取出每页的数据
    },
    prav() {
      if (this.cur != 1) {
        this.cur--;
        this.page(this.cur);
      }
    },
    next() {
      if (this.cur < this.conpages) {
        this.cur++;
        this.page(this.cur);
      }
    },
  },
};

</script>

<style scoped>
#app {
  position: absolute;
  
}
.nav {
  width: 550px;
  height: 30px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
div[class$="Page"] {
  width: 80px;
  height: 25px;
  text-align: center;
  color: black;
  line-height: 25px;
  background-color: #f4f4f5;
  margin: 0 5px;
}
div[class="pages"] {
  width: 25px;
  height: 25px;
  border: 1px solid #fff;
  border-radius: 2px;
  margin: 0 5px;
  background-color: #f4f4f5;
  text-align: center;
  line-height: 25px;
}
.active {
  width: 25px;
  height: 25px;
  border: 1px solid #409eff;
  border-radius: 5px;
  margin: 0 5px;
  background-color: #409eff;
  text-align: center;
  line-height: 25px;
  color: #fff;
}
.nav div:hover {
  cursor: pointer;
}
.box {
  width: 550px;
  height: 200px;
  border: 1px solid #eee;
  background-color: #f5f5f5;
}
</style>