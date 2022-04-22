<template>
    <div class="work-list">
        <!-- 搜索栏 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
            <!-- search -->
            <div class="floatRight">
                <el-form-item label="Job Name">
                    <el-input v-model="formInline.name" placeholder="Please enter job name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="btn-search" type="primary" @click="onSubmit" icon="el-icon-search">Search</el-button>
                </el-form-item>
            </div>
        </el-form>
        <!-- 表格 -->
        <el-table :data="tableData" height="calc(100% - 103px)" border style="width: 100%">
            <el-table-column fixed align="center" prop="jobName" label="Job Name" width="120"></el-table-column>
            <el-table-column align="center" prop="completeNumber" label="Complete Number" width="180"></el-table-column>
            <el-table-column align="center" prop="uncompleteNumber" label="Uncomplete Number" width="180"></el-table-column>
            <el-table-column align="center" prop="completionRate" label="Completion Rate"></el-table-column>
            <el-table-column align="center" prop="uncheck" label="Uncheck"></el-table-column>
            <el-table-column align="center" prop="checkRate" label="Check Rate" width="120"></el-table-column>
            <el-table-column align="center" prop="passNumber" label="Pass Number"></el-table-column>
            <el-table-column align="center" prop="excellentNumber" label="Excellent Number"></el-table-column>
        </el-table>
        <!-- 分页 -->
        <Paging :total="total"></Paging>
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
            tableData: [{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },{
                jobName: '1',
                completeNumber: '97',
                uncompleteNumber: '3',
                completionRate: '97%',
                uncheck: '2',
                checkRate: '98%',
                passNumber: '75',
                excellentNumber: '18'
                },
                
            ],
            formInline: {
                name: '',
                },
            dialogFormVisible: false,
            formLabelWidth: '90px',
            state: false,
            total: 400
        }
    },
    methods: {
        
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
.work-list .el-dialog .el-form-item {
    text-align: left;
}
.work-list .el-dialog .el-select {
    width: 100%;
}
</style>