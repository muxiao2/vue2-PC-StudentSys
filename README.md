# ------------------ Vue_PC_Parctice ------------------

### 一、项目准备

**前端：**Vue+ElementUI

**后端：**Express

#### 1.1 新建Vue和Express项目

#### 1.2 使用history路由模式
#### 1.3 运行项目自动在浏览器打开
### 二、ElementUi

#### 2.1 全局使用

##### 2.1.1 安装


### 三、样式重置

CSS Tools: Reset CSS：https://meyerweb.com/eric/tools/css/reset/

### 四、Page_Login

使用ElementUI的Card卡片布局

### 五、Page_Home

使用ElementUI的Card卡片布局

### 六、路由注册的方法

#### 6.1 官方推荐：懒加载

#### 6.2 require

**注意：使用require方式时，component是复数形式的components*

### 七、404NotFound

使用通配符 `*` 全局匹配路由

### 八、学生管理模块

新增students目录及Students文件

```diff
 components
+|- Students.vue
+|- /students
+  	|- StudentList.vue
+  	|- WorkList.vue
+	|- AttendanceManagement.vue
+	|- StudentInformation.vue
```

### 九、Page_Students

#### 9.1 使用ElementUI的Container布局容器

#### 9.2 使用ElementUI的NavMenu导航菜单

#### 9.3 路由调整

**注意：要开启路由模式需要添加 router 属性**

#### 9.4 FontAwesome

FontAwesome 4：https://fontawesome.dashgame.com/

FontAwesome 5+：https://fa5.dashgame.com/#/

##### 9.4.1 FontAwesome4下载

##### 9.4.2 FontAwesome5+下载

### 十、公共组件抽离封装

优化：根路径重定向,抽离Students的Header、Footer和Menu

### 十一、Page_StudentList

### 11.1 使用ElementUI的Table表格

### 11.2 使用ElementUI的Pagination分页

### 十二、抽离公共组件Paging

### 十三、调整学生管理的其他三个页面

### 十四、模拟接口

#### 14.1 常用请求数据的方法

- Ajax
- axios（Vue）
- fetch（ES6）

#### 14.2 模拟接口数据的工具

- RAP2：http://rap2.taobao.org/
- ApiPost：https://www.apipost.cn/

- ... ...

#### 14.3 ajax二次封装

### 十五、登录功能

#### 15.1 前端表单校验

#### 15.2 前端逻辑校验

#### 15.3 数据库可视化工具

Studio 3T：https://studio3t.com/download-studio3t-free

#### 15.4 连接数据库

#### 15.5 登录接口

**报错：**跨域问题

#### 15.6 解决跨域的方法

##### 15.6.1 后端解决

在Express项目中的app.js文件中设置请求头等


##### 15.6.2 前端解决

在config/index.js文件中配置proxyTable


**前端处理跨域打包的时候会有些麻烦，所以尽可能选择后端处理**

#### 15.7 获取数据

#### 15.8 向数据库插入数据

login.js单条数据使用insertOne()

#### 15.9 后端验证登录数据

MongoDB存储的数据是BSON，类JSON的一种二进制数据格式，使用toArray转换数据格式

#### 14.10 渲染用户名

前端使用localStorage进行本地存储

### 十六、考勤管理接口

#### 16.1 向数据库插入数据

多条数据使用insertMany()

常用请求数据的方法

Ajax 

axios  -->  vue

fetch -->  es6

安装axios

登录Rap接口管理平台或者apipost

创建接口数据

分页计算

表单验证-elm



# back-end

打开back-end终端,启动express，管理员运行命令启动除了自带的compass可视化工具还能用studio 3T

#### 16.4 接口合并及优化

### 十七、分页查询

#### 17.1  每页显示的数据条数

#### 17.2 总数据的条数

#### 17.3 默认展示的数据条数

#### 17.4 切换页码

#### 17.5 封装


### 十八、增删改查

#### 18.1 【增】

#### 18.2【删】

#### 18.3【改】

### 十九、接口封装

#### 19.1 封装连接数据库的方法

#### 19.2 封装新增数据的方法

config1.js：

**注意：**直接使用会报错，错误状态码500，用async await解决



#### 19.3 封装查询数据的方法

#### 19.4 封装修改数据的方法

#### 19.5 封装删除数据的方法

#### 19.6 优化：重置

#### 19.7 分页
