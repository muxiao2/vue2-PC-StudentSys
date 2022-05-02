<template>
    <div class="work-list">
        <!-- 搜索栏 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
            <!-- search -->
            <div class="floatRight">
                <el-form-item label="Job Name">
                    <el-input v-model="formInline.jobName" placeholder="Please enter job name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="btn-search" type="primary" @click="onSubmit" icon="el-icon-search">Search</el-button>
                </el-form-item>
            </div>
        </el-form>
        <!-- 表格 -->
        <!-- tableData.slice((当前页数-1)*每页条数,当前页数*每页条数) -->
        <el-table :data="tableData.slice((currentPage - 1) * pageSize,currentPage * pageSize)" height="calc(100% - 103px)" border style="width: 100%">
            <el-table-column fixed align="center" prop="jobName" label="Job Name" width="120"></el-table-column>
            <el-table-column align="center" prop="completeNumber" label="Complete Number" width="180"></el-table-column>
            <el-table-column align="center" prop="uncompleteNumber" label="Uncomplete Number" width="180"></el-table-column>
            <el-table-column align="center" prop="completionRate_text" label="Completion Rate"></el-table-column>
            <el-table-column align="center" prop="uncheck" label="Uncheck"></el-table-column>
            <el-table-column align="center" prop="checkRate_text" label="Check Rate" width="120"></el-table-column>
            <el-table-column align="center" prop="passNumber" label="Pass Number"></el-table-column>
            <el-table-column align="center" prop="excellentNumber" label="Excellent Number"></el-table-column>
        </el-table>
        <!-- 分页 -->
        <Paging :total="total" @numChange="pageChanges"></Paging>
        <!-- <div class="paging">
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
        </div> -->
    </div>
</template>

<script>
import Paging from '@/components/common/Paging.vue'
export default {
    components: {
        Paging
    },
    // props: {
    //     'total': Number
    // },
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
        this.service.get('http://rap2api.taobao.org/app/mock/301642/worklist')
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
        pageChanges(currentPage, pageSize) {
            console.log(currentPage, pageSize);
            this.pageSize = pageSize;
            this.currentPage = currentPage;
        },
        // handleSizeChange(val) {
        //     this.pageSize = val
        //     this.currentPage = 1
        //     this.getAttendanceData('attendance/page?pageSize=' + val)
        // console.log(`每页 ${val} 条`);
        // },
        // handleCurrentChange(val) {
        //     this.currentPage = val
        //     console.log(`当前页: ${val}`);
            // this.getAttendanceData(`attendance/page?currentPage=${this.currentPage}&pageSize=${this.pageSize}`)
        // }
    }
}
</script>

<style scoped>
.work-list {
    height: calc(100vh - 284px);
}
.work-list>.el-form {
    text-align: left;
    min-width: 1090px;
}
.work-list>.el-form .el-button.btn-search {
    background-color: #10401c;
    border-color: #10401c;
    color: #d3d6d9;
}
/* .work-list .el-dialog .el-form-item {
    text-align: left;
}
.work-list .el-dialog .el-select {
    width: 100%;
} */
.work-list .el-pagination {
    margin-top: 20px;
    text-align: right;
}
</style>