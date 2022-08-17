<template>
    <div class="attendance-management">
        <!-- 搜索栏 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
            <!-- search -->
            <div class="floatRight">
                <el-form-item label="Name">
                    <el-input v-model="formInline.name" placeholder="Please enter student's name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="btn-search" type="primary" @click="searchHandle" icon="el-icon-search">Search</el-button>
                </el-form-item>
            </div>
        </el-form>
        <!-- 表格 -->
        <el-table :data="tableData.slice((currentPage - 1) * pageSize,currentPage * pageSize)" height="calc(100% - 103px)" border style="width: 100%">
            <el-table-column fixed align="center" prop="name" label="Name" width="120"></el-table-column>
            <el-table-column align="center" prop="class" label="Class" width="180"></el-table-column>
            <el-table-column align="center" prop="due" label="To Be Due" width="180"></el-table-column>
            <el-table-column align="center" prop="actual" label="Actual"></el-table-column>
            <el-table-column align="center" prop="attendance" label="Attendance"></el-table-column>
            <el-table-column align="center" prop="attendanceRanking" label="Attendance Ranking" width="120"></el-table-column>
            <el-table-column align="center" prop="attendanceRate" label="Attendance Rate"></el-table-column>
        </el-table>
        <!-- 分页 -->
        <Paging :total="total" @numChange="pageChanges"></Paging>
    </div>
</template>

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
                name: '',
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
        this.getAttendanceData('attendance/find')
        // this.service('attendance/find')
        // .then(res => {
        //     // console.log(res.data);
        //     if(res.data.status === 200) {
        //         this.tableData = [...res.data.data]
        //     }
        // })
        // // this.service.get('/attendancemanagement')
        // // .then(res => {
        // //     if(res.status === 200) {
        // //         console.log(res);
        // //         res.data.data.forEach(item => {
        // //             item.attendance_text = item.attendance * 100 + '%'
        // //         })
        // //         // es6展开运算符
        // //         this.total = res.data.total
        // //         this.tableData = [...res.data.data]
        // //     }
        // // })
        // .catch(err => {
        //     // console.log(err);
        //     throw err
        // })
    },
    methods: {
        getAttendanceData(url) {
            this.service(url)
            .then(res => {
                if(res.data.status === 200) {
                    // console.log(res.data);
                    this.tableData = [...res.data.data]
                    this.total = res.data.total
                }
            })
            .catch(err => {
                // console.log(err);
                throw err
            })
        },
        searchHandle() {
            // 非空校验
            if(this.formInline.name === '') {
                this.$message.error('The query condition cannot be empty!')
                this.getAttendanceData('attendance/find')
            }else {
                // console.log(this.formInline.name);
                this.service.get('attendance/find?name=' + this.formInline.name)
                .then(res => {
                this.formInline.name = ''
                // console.log(res)
                if(res.data.status === 200) {
                    this.tableData = [...res.data.data]
                }else {
                    this.$message.error(res.data.msg)
                }
            })
            .catch(err => {
                throw err
            })
                } 
        },
        pageChanges(currentPage, pageSize) {
            this.pageSize = pageSize;
            this.currentPage = currentPage;
        },
    }
}
</script>

<style scoped>
.attendance-management {
    height: calc(100vh - 284px);
}
.attendance-management>.el-form {
    text-align: left;
    min-width: 1090px;
}
.attendance-management>.el-form .el-button.btn-search {
    background-color: #10401c;
    border-color: #10401c;
    color: #d3d6d9;
}
/* .attendance-management .el-dialog .el-form-item {
    text-align: left;
}
.attendance-management .el-dialog .el-select {
    width: 100%;
} */
</style>