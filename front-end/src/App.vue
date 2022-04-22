<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('./assets/css/reset');
html {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-input.is-active .el-input__inner, .el-input__inneer:focus {
  border-color: #10401c;
}
.fontWeight {
  font-weight: bolder;
}
.floatRight {
  float: right;
}
.floatLeft {
  float: left;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #10401c;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #ffcc66;
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #ffcc66;
  background: #ffcc66;
}
.el-radio__inner:hover {
  border-color: #ffcc66;
}
.el-radio__input.is-checked+.el-radio__label {
  color: #10401c;
}
.el-select-dropdown__item.selected {
  color: #10401c;
}
.el-input.is-active .el-input__inner, 
.el-input__inner:focus {
  border-color: #10401c;
}
 .el-select .el-input.is-focus .el-input__inner {
  border-color: #10401c;
}
.el-select .el-input__inner:focus {
    border-color: #10401c;
}
.el-button--primary {
  color: #d3d6d9;
  background-color: #10401c;
  border-color: #10401c;
}
.el-button:focus,
.el-button:hover {
  color: #10401c;
  border-color: #10401c1a;
  background-color: #10401c1a;
}
.el-button--primary:focus,
.el-button--primary:hover {
  background-color: #206933;
  border-color: #206933;
}
</style>
