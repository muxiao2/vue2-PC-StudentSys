<<<<<<< HEAD
# ------------------ Vue_PC_Parctice ------------------

### 一、项目准备

**前端：**Vue+ElementUI

**后端：**Express

#### 1.1 新建Vue和Express项目

```shell
vue init webpack front-end
```

```shell
npm install -g express-generator
express --view=ejs back-end
```

#### 1.2 使用history路由模式

```js
mode: 'history'
```

#### 1.3 运行项目自动在浏览器打开

```js
autoOpenBrowser: true
```

### 二、ElementUi

#### 2.1 全局使用

##### 2.1.1 安装

```shell
npm i element-ui -S
```

##### 2.1.2 完整引入

在 main.js 中写入以下内容：

```js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
```

#### 2.2 按需使用

##### 2.2.1 安装babel-plugin-component

```shell
npm install babel-plugin-component -D
```

##### 2.2.2 修改.babelrc

```js
{
    "presets": [
        ["env", {
            "modules": false,
            "targets": {
                "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
            }
        }],
        "stage-2"
    ],
        "plugins": ["transform-vue-jsx", "transform-runtime", [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]]
}
```

##### 2.2.3 按需引入

```js
import { Row, Button } from 'element-ui'
Vue.use(Row)
Vue.use(Button)
```

### 三、样式重置

CSS Tools: Reset CSS：https://meyerweb.com/eric/tools/css/reset/

创建reset.css在App.vue中引入

```css
@import url('./assets/css/reset');
```

Path自动补全插件：Path Autocomplete

### 四、Page_Login

使用ElementUI的Card卡片布局

### 五、Page_Home

使用ElementUI的Card卡片布局

### 六、路由注册的方法

#### 6.1 官方推荐：懒加载

```js
component: () => import('@/components/Home')
```

#### 6.2 require

**注意：使用require方式时，component是复数形式的components**

```js
components: require('@/components/Login')
```

### 七、404NotFound

使用通配符 `*` 全局匹配路由

```js
{
    path: '*',
	name: 'NotFound',
	component: () => import('@/components/NotFound')
}
```

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

![](media\01.png)

#### 9.4 FontAwesome

FontAwesome 4：https://fontawesome.dashgame.com/

FontAwesome 5+：https://fa5.dashgame.com/#/

##### 9.4.1 FontAwesome4

###### 1.下载

```shell
npm install font-awesome --save
```

###### 2.引入

```js
import 'font-awesome/css/font-awesome.min.css'
```

###### 3.使用

```html
<i class="fa fa-bank"></i>
```

##### 9.4.2 FontAwesome5+

###### 1.下载

```shell
npm install --save-dev @fortawesome/fontawesome-free
```

###### 2.引入

```js
import '@fortawesome/fontawesome-free/css/all.min.css'
```

###### 3.使用

```html
<!-- 实心：fas -->
<i class="fas fa-carrot"></i>
<!-- 常规：far -->
<i class="far fa-snowflake"></i>
<!-- 品牌：fab -->
<i class="fab fa-css3-alt"></i>
```

### 十、公共组件抽离封装

优化：根路径重定向

抽离Students的Header、Footer和Menu

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

```js
import axios from 'axios'

const service = axios.create({
    // baseURL：全局请求地址根路径
    baseURL: 'http://rap2api.taobao.org/app/mock/301444/',
    // 指定请求超时的毫秒数，超时请求自动中断
    timeout: 1000,
    // 请求头
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    }
})

// 添加请求拦截器
service.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config
}, function(error) {
    // 请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function(response) {
    // 对响应数据做些什么
    return response
}, function(error) {
    // 响应错误做些什么
    return Promise.reject(error)
})

export default service
```

### 十五、登录功能

#### 15.1 前端表单校验

#### 15.2 前端逻辑校验

#### 15.3 数据库可视化工具

Studio 3T：https://studio3t.com/download-studio3t-free

#### 15.4 连接数据库

```shell
npm i mongodb
```

在Express项目中新建libs目录，再新建config.js文件

```js
// 连接MongoDB
let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/parctice'

// 导出
module.exports = async function() {
    const client = await MongoClient.connect(url, {useNewUrlParser: true})
    console.log('connect success...')
    db = client.db('parctice')
    return db
}
```

在Express项目中的app.js文件中全局导入连接数据库的方法

```js
var gdb = require('./libs/config');
var db;
(async () => {
    db = await gdb()
})();
```

#### 15.5 登录接口

在Express项目的routes目录下新建login.js的文件

```js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('login');
});

router.post('/', function(req, res, next) {
    res.send({ status: 200, msg: '登录成功' });
});

module.exports = router;
```

在Express项目中的app.js文件中注册路由

```js
app.use('/login', require('./routes/login'));
```

修改service.js中的baseURL为'http://localhost:3000/'

在Login.vue中请求数据

```js
this.service.post('login', this.form)
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})
```

**报错：**跨域问题

![](media\02.png)

#### 15.6 解决跨域的方法

##### 15.6.1 后端解决

在Express项目中的app.js文件中设置请求头等

```js
// 跨域设置
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-headers', 'Content-type, Content-length, Authorization, Accept, X-request-With');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    req.header('X-Powered-by', '3.2.1');
    if(req.method === 'OPTIONS') res.send(200)
    else next();
})
```

##### 15.6.2 前端解决

在config/index.js文件中配置proxyTable

```js
proxyTable: {
    '/api': {
        target: 'http://localhost:3000/', //后端接口地址
        changeOrigin: true, //是否跨域
        pathRewrite: {
            '^/api': '' //以api开头的url才会开始进行转发，当访问http://localhost:8000/login的时候会转到ttp://localhost:3000/login
        } //设置转发
    }
}
```

**前端处理跨域打包的时候会有些麻烦，所以尽可能选择后端处理**

#### 15.7 获取数据

```js
router.post('/', function(req, res, next) {
    // console.log(req.body)
    if(req.body.username && req.body.password) {
        res.send({ status: 200, msg: '登录成功' });
    }else {
        res.send({ status: 401, msg: '无权限用户' })
    }
});

```

```js
this.service.post('login', this.form)
.then(res => {
    // console.log(res)
    if(res.data.status === 200) {
        this.$message({
            message: res.data.msg,
            type: 'success'
        })
        this.$router.push('/students')
    }else {
        this.$message.error(res.data.msg)
    }
})
.catch(err => {
    console.log(err)
})
```

#### 15.8 向数据库插入数据

login.js单条数据使用insertOne()

```js
router.get('/', function(req, res, next) {
    let data = { username: 'admin', password: 'admin123' }
    db.collection('admin').insertOne(data, (err, result) => {
        if(err) throw err
        res.send('新增管理员成功')
    })
});
```

#### 15.9 后端验证登录数据

MongoDB存储的数据是BSON，类JSON的一种二进制数据格式，使用toArray转换数据格式

#### 14.10 渲染用户名

login.js

```js
res.send({ status: 200, msg: '登录成功', username: item.username });
```

前端使用localStorage进行本地存储

![image-20220427223859205](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220427223859205.png)

渲染进页面

![image-20220427224043009](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220427224043009.png)

### 十六、考勤管理接口

![image-20220427224846823](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220427224846823.png)

#### 16.1 向数据库插入数据

多条数据使用insertMany()

```js
router.get('/', function(req, res, next) {
    let arr = []
    for(let i = 0; i < 85; i++) {
        let obj = {
            name: 'Name' + i,
            class: 'Web-Class01',
            toBeDue: 100,
            actual: 85,
            attendance: '85%',
            attendanceRanking: 1,
            attendanceRate: 'Excellent'
        }
        arr.push(obj)
    }
    db.collection('attendance').insertMany(arr, (err, result) => {
        if(err) throw err
        res.send({ status: 200, msg: '数据新增成功' })
    })
});
```

#### 16.2 请求数据的接口

```js
router.get('/find', function(req, res) {
    let data = db.collection('attendance').find()
    // console.log(data)
    data.toArray((err, result) => {
        // console.log(result)
        res.send({ status: 200, data: result })
    })
})
```

#### 16.3 查询数据的接口

```js
router.get('/search', (req, res) => {
    // console.log(req.query)
    let data = db.collection('attendance').find(req.query)
    data.toArray((err, result) => {
        // console.log(result)
        if(result.length > 0) {
            res.send({ status: 200, data: result })
        }else {
            res.send({ data: [], msg: 'Empty data or wrong field!' })
        }
    })
});
```

# 16.4 作业

- 思考：请求和查询接口能否合并
  - 能：怎么合并？
  - 不能：为什么？

- 分页的后端接口
  - 页面数据展示条数
  - 数据总条数
  - ... ...
  
  自己归纳
  
  

前后端分离时，后端无数据

常用请求数据的方法

Ajax 

axios  -->  vue

fetch -->  es6

安装axios

```shell
npm install axios
```

登录Rap接口管理平台或者apipost

创建接口数据

在src下面新建service.js进行二次封装

```js
import axios from 'axios'
// 二次封装
const service = axios.create({
    //baseURL:全局请求地址根路径
    baseURL: 'http://rap2api.taobao.org/app/mock/301642/',
    // 指定请求超时的毫秒数，超时请求自动中断
    timeout:1000,
    // 请求头
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    }
})

//添加请求拦截器
service.interceptors.request.use(function(config) {
    // 在发送请求前做什么
    return config
}, function(error) {
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function(response) {
    // 对响应数据做些什么
    return response
}, function(error) {
    // 响应错误做些什么
    return Promise.reject(error)
})
// 导出
export default service
```

在main.js上挂载使用

```
import service from './service';
Vue.prototype.service = service //service挂载到原型上
```

在workListt下

```vue
<script>
import Paging from '@/components/common/Paging.vue'
export default {
    components: {
        Paging
    },
    data() {
        return {
            tableData: [],
            formInline: {
                jobName: '',
                },
            dialogFormVisible: false,
            formLabelWidth: '90px',
            state: false,
            total: 0
        }
    },
    created() {
        this.service.get('worklist')
        .then(res => {
            if(res.status === 200) {
                console.log(res);
                res.data.data.forEach(item => {
                    // 新增一个
                    item.completionRate_text = item.completionRate * 100 + '%'
                    item.checkRate_text = item.checkRate * 100 + '%'
                })
                // es6展开运算符
                this.total = res.data.total
                this.tableData = [...res.data.data]
            }
        })
        .catch(err => {
            console.log(err);
        })
    },
    methods: {
        
    }
}
```



分页计算

```vue
<template>
<el-table :data="tableData.slice((currentPage - 1) * pageSize,currentPage * pageSize)" height="calc(100% - 103px)" border style="width: 100%"></el-table>


<div class="paging">
    <el-pagination
    background
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
    </el-pagination>
</div>
</template>
<script>
// import Paging from '@/components/common/Paging.vue'
export default {
    // components: {
    //     Paging
    // },
    props: {
        'total': Number
    },
    data() {
        return {
            tableData: [],
            formInline: {
                jobName: '',
                },
            dialogFormVisible: false,
            formLabelWidth: '90px',
            state: false,
            total: 0,
            currentPage: 1,
            // 每页显示条数
            pageSize: 20,
        }
    },
    created() {
        this.service.get('worklist')
        .then(res => {
            if(res.status === 200) {
                console.log(res);
                res.data.data.forEach(item => {
                    // 新增一个
                    item.completionRate_text = item.completionRate * 100 + '%'
                    item.checkRate_text = item.checkRate * 100 + '%'
                })
                // es6展开运算符
                this.total = res.data.total
                this.tableData = [...res.data.data]
            }
        })
        .catch(err => {
            console.log(err);
        })
    },
    methods: {
        onsubmit() {
            console.log('submit!');
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.currentPage = 1
        console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val
            console.log(`当前页: ${val}`);
        }
    }
}
</script>
```

表单验证-elm



# back-end

打开back-end终端

```shell
npm start
```

启动express，管理员运行命令启动

```shell
mongod
```

除了自带的compass可视化工具还能用

studio 3T

![image-20220426085832170](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220426085832170.png)

![image-20220426085859272](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220426085859272.png)

在back-end下创建文件夹libs---->创建文件config.js---->安装mongodb

```shell
npm i mongodb
```

![image-20220426090205984](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220426090205984.png)

配置confi.js

```js
const { Db } = require('mongodb');

// 连接mongodb
let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/parctice'
// 导出
module.exports = async function() {
    const client = await MongoClient.connect(url, {useNewUrlParser: true})
    console.log('connect success...');
    db = client.db('parctice')
    return db
} 
```

配置app.js

```js
// 全局导入连接数据库的方法
var gdb = require('./libs/config');
var db;
(async() => {
  db = await gdb()
})();
```

在routes文件夹下面创建login.js

```js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('login');
});

module.exports = router;

```

配置app.js

```js
app.use('/login', require('./routes/login'));
```

发生修改就要重启

跟前端测试一下

![image-20220426092812581](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220426092812581.png)

![image-20220426092853571](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220426092853571.png)

发现问题跨域(一般后端处理)

![image-20220426092936400](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220426092936400.png)

![image-20220426092945744](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220426092945744.png)

解决方法一：在后端的app.js中

```js
// 跨域设置
app.all('*', function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-headers', 'Content-type,Content-length,Authorization,Accept,X-request-With');
  res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
  req.header('X-powered-by','3.2.1');
  if(req.method === 'OPTIONS') res.send(200)
  else next();
})

```

解决方法二：在前端的config文件夹下index.js 中(项目打包就会出问题)

```js
 '/api': {
         target:'http://localhost:3000/',//后端接口地址
         changeOrigin:true,//是否跨域
         pathRewrite: {
           '^/api': ''//以api开头的url才会开始转发，当访问localhost:8000/login转localhost:3000,要在baseURL中改/api
         }//设置转发
       }
```

#### 16.4 接口合并及优化

```js
router.get('/find', (req, res) => {
    let data = db.collection('attendance').find(req.query)
    data.toArray((err, result) => {
        if(err) throw err
        result.length > 0 ? res.send({ status: 200, data: result }) : res.send({ data: [], msg: 'Empty data or wrong field!' })
    })
})
```

```vue
this.service.get('attendance/find?name=' + this.formInline.name)
```



### 十七、分页查询

#### 17.1  每页显示的数据条数

```js
router.get('/page', (req, res) => {
    // let data = db.collection('attendance').find().skip().limit()
    // console.log(req.query)
    let data = db.collection('attendance').find().limit(Number(req.query.pageSize))
    data.toArray((err, result) => {
        if(err) throw err
        res.send({ status: 200, data: result })
    })
})
```

#### 17.2 总数据的条数

直接通过 `.count()` 方法是不能获取到数据的，得到的是 `Promise { <pending> }`，所以要对数据进行处理

- `.then` 接收

- `async` `await` 接收

  ```js
  let total = await db.collection('attendance').find().count()
  ```

- `collection.find().count()` 是针对数据库的操作才可以返回的数值，在NodeJs中使用的话

  ```js
  collection.find().count((err, count) => {
      // result就是要获取的数量值
      console.log(result)
  })
  ```

#### 17.3 默认展示的数据条数

```js
let data = db.collection('attendance').find(req.query).limit(20)
```

#### 17.4 切换页码

```vue
handeleCurrentChange(val){
	this.currentPage = val
	console.log(`当前页: ${val}`)
	this.service.get(`attendance/page?						currentPage=${this.currentPage}&pageSize=${this.pageSize}`)
	.then(res => {
	//console.log(res)
	if(res.data.status === 200) {
	this.tableData = [...res.data.data]
}
})
	.catch(err => {
		throw err
})
}
```



```js
// skip参数：(当前页数 - 1) * 每页条数
let skip = Number((req.query.currentPage - 1)) * Number(req.query.pageSize)
let data = db.collection('attendance').find().limit(Number(req.query.pageSize)).skip(skip)
```

#### 17.5 封装

```vue
handleSizeChange(val) {
	this.pageSize = val
	this.currentPage = 1
	this.getAttendanceData('attendance/page?pageSize=' + val)
},
handleCurrentChange(val) {
	this.currentPage = val
	console.log(`当前页: ${val}`)
	this.getAttendanceData(`attendance.page?currentPage=${this.currentPage}&pageSize=${this.pageSize}`)
}
```



```js
getAttendanceData(url) {
    this.service(url)
    .then(res => {
        if(res.data.status === 200) {
            this.tableData = [...res.data.data]
            this.total = res.data.total
        }
    })
    .catch(err => {
        throw err
    })
}
```

### 十八、增删改查

#### 18.1 【增】

```js
router.post('/', (req, res) => {
    let data = req.body
    db.collection('list').insertOne(data, (err, result) => {
        if(err) throw err
        res.send({ status: 200, msg: 'Description adding new data succeeded' })
    })
});
```

#### 18.2【删】

```js
router.delete('/', (req, res) => {
    db.collection('list').remove(req.query, (err, result) => {
        if(err) throw err
        res.send({ status: 200, msg: `Delete ${req.query.name}\'s information has succeed` })
    })
});
```

#### 18.3【改】

```js
router.put('/', (req, res) => {
    const { gender, name, age, studentId, className, state, address, concat } = req.body
    db.collection('list').updateOne({ studentId: req.body.studentId }, {
        $set: {
            gender,
            name,
            age,
            studentId,
            className,
            state,
            address,
            concat
        }
    }, err => {
        if(err) throw err
        res.send({ status: 200, msg: 'Data Modification succeeded' })
    })
});

```

#### 18.4【查】

```js
router.get('/', async function(req, res) {
    let total = await db.collection('list').find().count()
    let skip = (Number(req.query.currentPage - 1) * Number(req.query.pageSize))
    let data = db.collection('list').find(req.query.name ? req.query : {}).limit(Number(req.query.pageSize)).skip(skip || 0)
    data.toArray((err, result) => {
        if(err) throw err
        res.send({ status: 200, data: result, total: total })
    })
});
```
=======
# vue-pc-student
student
<!-- 完善students前端页面，完成增删改查样式 -->
完善students前端页面，完成增删改查样式
>>>>>>> 9ded50c8b6aefa73d3eed06c1e09abb2525d9014
