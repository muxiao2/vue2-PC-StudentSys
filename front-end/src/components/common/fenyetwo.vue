<template>
  <div class="wrap">
    <!-- 测试用的，不投入使用该页面 -->
    <main class="maintwo">
      <table class="tabletwo">
        <thead>
          <tr>
            <th>名称</th>
            <th>数量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in currentPageData" :key="index">
            <td>
              {{ item.name }}
            </td>
            <td>
              {{ item.count }}
            </td>
          </tr>
        </tbody>
      </table>
    </main>
    <footer class="footertwo">
      <button class="btntwo" @click="prevPage()">上一页</button>
      <span class="spantwo">第{{ currentPage }}页/共{{ totalPage }}页</span>
      <button class="btntwo" @click="nextPage()">下一页</button>
    </footer>
  </div>
</template>

<script>
let productList = [];
for (let i = 0; i < 99; i++) {
  productList.push({
    name: "第" + i + "瓶奶酪",
    count: Math.random() * 100,
  });
}
export default {
  data() {
    return {
      productList, //所有数据
      totalPage: 1, // 统共页数，默认为1
      currentPage: 1, //当前页数 ，默认为1
      pageSize: 10, // 每页显示数量
      currentPageData: [], //当前页显示内容
    };
  },
  mounted() {
    // 计算一共有几页
    this.totalPage = Math.ceil(this.productList.length / this.pageSize);
    // 计算得0时设置为1
    this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
    this.setCurrentPageData();
  },
  methods: {
    // 设置当前页面数据，对数组操作的截取规则为[0~10],[10~20]...,
    setCurrentPageData() {
      let begin = (this.currentPage - 1) * this.pageSize;
      let end = this.currentPage * this.pageSize;
      this.currentPageData = this.productList.slice(begin, end);
    },
    //上一页
    prevPage() {
      console.log(this.currentPage);
      if (this.currentPage == 1) return;

      this.currentPage--;
      this.setCurrentPageData();
    },
    // 下一页
    nextPage() {
      if (this.currentPage == this.totalPage) return;

      this.currentPage++;
      this.setCurrentPageData();
    },
  },
};
</script>

<style scoped>
.wrap {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 400px;
    background-color: lightblue;
}
.wrap>.maintwo {
    width: 100%;
    height: 100%;
}
</style>