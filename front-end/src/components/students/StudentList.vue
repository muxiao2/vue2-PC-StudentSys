<template>
    <div class="student-list">
        <!-- 内容 -->
        <!-- 表单按钮 -->
        <el-card shadow="always" class="table-box">
            <el-button type="primary" class="btna">
                <i class="fa fa-plus-square"></i>Addition
            </el-button>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="Name">
                    <el-input v-model="formInline.user" placeholder="Please enter student name"></el-input>
                </el-form-item>
                <el-form-item label="StudentID">
                    <el-select v-model="formInline.region" placeholder="Please enter StudentId">
                    </el-select>
                </el-form-item>
                <el-form-item label="Class">
                    <el-select v-model="formInline.class" placeholder="Please select a class">
                    <el-option label="one" value="shanghai"></el-option>
                    <el-option label="two" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" icon="el-icon-search">Search</el-button>
                </el-form-item>
            </el-form>
            <!-- 表格 -->
            <el-table :data="tableData" height="550" border style="width: 100%">
                <el-table-column prop="name" label="Name"></el-table-column>
                <el-table-column prop="gender" label="Gender"></el-table-column>
                <el-table-column prop="age" label="Age"></el-table-column>
                <el-table-column prop="studentid" label="Student ID"></el-table-column>
                <el-table-column prop="class" label="Class"></el-table-column>
                <el-table-column prop="state" label="State"></el-table-column>
                <el-table-column prop="address" label="Address"></el-table-column>
                <el-table-column prop="concat" label="Concat"></el-table-column>
                <el-table-column label="Operate">
                    <template slot-scope="scope">
                        <el-button class="btn-edit" size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button class="btn-del" size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination background layout="prev, pager, next" :total="1000" class="fenye"></el-pagination>
        </el-card>
    </div>
</template>

<script>
console.log();
export default {
    data() {
        return {
            tableData: [{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: '1',
                state: '1',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: '1',
                state: '1',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: '1',
                state: '1',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: '1',
                state: '1',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: '1',
                state: '1',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: '1',
                state: '1',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: '1',
                state: '1',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: '1',
                state: '1',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: '1',
                state: '1',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: '1',
                state: '1',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: '1',
                state: '1',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: '1',
                state: '1',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: '1',
                state: '1',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: '1',
                state: '1',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
            ],
            formInline: {
                user: '',
                region: '',
                class: ''
                },
        }
    }
}
</script>

<style scoped>
.mianbao-box {
    width: 100%;
}
.el-button--primary {
    background-color: #10401c;
    border-color: #10401c;
}
.table-box {
    width: 100%;
    float: left;
    margin-top: 20px;
}
.table-box .btna {
    float: left;
}
.demo-form-inline {
    float: right;
}
.fenye {
    margin-top: 20px;
}
.btn-edit {
    background-color: #10401c;
    border-color: #10401c;
    color: #fff;
}
.btn-del {
    background-color: #ffcc66;
    border-color: #ffcc66;
}
</style>