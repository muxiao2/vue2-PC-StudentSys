<template>
  <div class="tfourtong">
    <div id="map">
      <div class="mapUl">
        <a-row type="flex" justify="center">
          <a-col :span="4" v-for="(item, index) in 24" :key="index">
            <span class="spanpos">{{ index + 1 }}</span>
            <a-badge :count="count" :overflow-count="maxcount">
              <a href="#" class="head-example" />
            </a-badge>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 100,
      maxcount: 99,//最大徽标值
    };
  },
  methods: {},
};
</script>

<style scoped>
.tfourtong {
  width: 100%;
  display: flex;
}
.tfourtong > #map {
  width: 100%;
  height: 800px;
  border: 5px solid #000;
  /* background-color: #000; */
}
.tfourtong > #map > .mapUl {
  width: 100%;
  height: 100%;
  /* display: flex; */
}
.tfourtong > #map > .mapUl .spanpos {
  position: relative;
  left: -40%;
  top: 5%;
  font-weight: 600;
}
.ant-row-flex-center {
  width: 100%;
  height: 100%;
  /* background-color: lightblue; */
}
/* 背景图片 */
.ant-col-4 {
  /* display: block; */
  width: 16%;
  /* max-width: 400px; */
  height: 24%;
  /* min-height: 125px; */
  background: url("../../assets/fourbg.png") no-repeat 0px 35px / 100% 80%;
  border: 3px solid #000;
}
.ant-col {
  margin: auto;
}
/* 徽标的定位 */
.ant-badge {
    position: relative;
    left: 35%;
    top: 5%;
}
</style>