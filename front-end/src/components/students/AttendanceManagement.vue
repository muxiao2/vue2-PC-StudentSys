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
                    <el-button class="btn-search" type="primary" @click="onSubmit" icon="el-icon-search">Search</el-button>
                </el-form-item>
            </div>
        </el-form>
        <!-- 表格 -->
        <el-table :data="tableData" height="calc(100% - 103px)" border style="width: 100%">
            <el-table-column fixed align="center" prop="name" label="Name" width="120"></el-table-column>
            <el-table-column align="center" prop="class" label="Class" width="180"></el-table-column>
            <el-table-column align="center" prop="due" label="To Be Due" width="180"></el-table-column>
            <el-table-column align="center" prop="actual" label="Actual"></el-table-column>
            <el-table-column align="center" prop="attendance" label="Attendance"></el-table-column>
            <el-table-column align="center" prop="attendanceRanking" label="Attendance Ranking" width="120"></el-table-column>
            <el-table-column align="center" prop="attendanceRate" label="Attendance Rate"></el-table-column>
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
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
                },{
                name: 'muxiao',
                class: 'class01',
                due: '123',
                actual: '123',
                attendance: '123',
                attendanceRanking: '123',
                attendanceRate: '123',
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
.attendance-management .el-dialog .el-form-item {
    text-align: left;
}
.attendance-management .el-dialog .el-select {
    width: 100%;
}
</style>