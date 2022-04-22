<template>
    <div class="student-list">
        <!-- 内容 -->
            <!-- 搜索栏 -->
            <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
                <el-form-item>
                    <el-button @click="additionHandle" type="primary" class="fontWeight btn-addition" icon="el-icon-circle-plus">Addition</el-button>
                </el-form-item>
                <!-- search -->
                <div class="floatRight">
                    <el-form-item label="Name">
                        <el-input v-model="formInline.name" placeholder="Please enter student name"></el-input>
                    </el-form-item>
                    <el-form-item label="StudentID">
                        <el-select v-model="formInline.studentId" placeholder="Please enter StudentId">
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Class">
                        <el-select v-model="formInline.class" placeholder="Please select a class">
                        <el-option label="Class01" value="1"></el-option>
                        <el-option label="Class02" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="btn-search" type="primary" @click="onSubmit" icon="el-icon-search">Search</el-button>
                    </el-form-item>
                </div>
            </el-form>
            <!-- 表格 -->
            <el-table :data="tableData" height="calc(100% - 103px)" border style="width: 100%">
                <el-table-column fixed align="center" prop="name" label="Name" width="120"></el-table-column>
                <el-table-column align="center" prop="gender" label="Gender" width="120"></el-table-column>
                <el-table-column align="center" prop="age" label="Age" width="120"></el-table-column>
                <el-table-column align="center" prop="studentid" label="Student ID"></el-table-column>
                <el-table-column align="center" prop="class" label="Class"></el-table-column>
                <el-table-column align="center" prop="state" label="State" width="120"></el-table-column>
                <el-table-column align="center" prop="address" label="Address"></el-table-column>
                <el-table-column align="center" prop="concat" label="Concat"></el-table-column>
                <el-table-column align="center" label="Operate">
                    <template slot-scope="scope">
                        <el-button class="fontWeight btn-edit" size="mini" icon="el-icon-edit" @click="editHandle(scope.row)">Edit</el-button>
                        <el-button class="fontWeight btn-del" size="mini" type="danger" icon="el-icon-delete" @click="deleteHandle(scope.row)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <Paging :total="total"></Paging>
             <!-- 弹窗 -->
            <el-dialog :title="state ? 'Edit Student Information' : 'Add Student Information'" :visible.sync="dialogFormVisible" width="520px">
                <el-form :model="form">
                    <el-form-item label="Name" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Gender" :label-width="formLabelWidth">
                        <el-radio v-model="form.gender" label="1">Male</el-radio>
                        <el-radio v-model="form.gender" label="2">Female</el-radio>
                    </el-form-item>
                    <el-form-item label="Age" :label-width="formLabelWidth">
                        <el-input v-model="form.age" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="StudentID" :label-width="formLabelWidth">
                        <el-input v-model="form.studentid" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Class" :label-width="formLabelWidth">
                    <el-select v-model="form.class" placeholder="Please select a class">
                        <el-option label="class01" value="1"></el-option>
                        <el-option label="class02" value="2"></el-option>
                    </el-select>
                    </el-form-item>
                    <el-form-item label="State" :label-width="formLabelWidth">
                        <el-select v-model="form.state" placeholder="Please select status">
                            <el-option label="在读" value="1"></el-option>
                            <el-option label="结业" value="2"></el-option>
                            <el-option label="休学" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Address" :label-width="formLabelWidth">
                        <el-input v-model="form.address" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Concat" :label-width="formLabelWidth">
                        <!-- autocomplete自动补全记忆属性 -->
                        <el-input v-model="form.concat" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button class="btn-cancel" @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button class="btn-confirm fontWeight" type="primary" @click="AddConfirmHandle()">Confirm</el-button>
                </div>
            </el-dialog>
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
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },{
                name: 'muxiao',
                gender: '1',
                age: '18',
                studentid: '2055001007',
                class: 'class1',
                state: '在校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
                {
                name: 'muxiao',
                gender: '2',
                age: '18',
                studentid: '2055001007',
                class: 'class2',
                state: '离校',
                address: '上海市普陀区金沙江路1518弄',
                concat: '180-xxxx-xxxx'
                },
            ],
            formInline: {
                name: '',
                studentId: '',
                class: ''
                },
            dialogFormVisible: false,
            form: {
                name: '',
                gender: '1',
                age: '',
                studentid: '',
                class: '1',
                state: '1',
                address: '',
                concat: '',
            },
            formLabelWidth: '90px',
            state: false,
            total: 400
        }
    },
    methods: {
        onsubmit() {
            console.log('submit!');
        },
        AddConfirmHandle() {
            this.dialogFormVisible = false
            //获取表单元素
            console.log(this.form);
        },
        additionHandle() {
            this.form = { gender: '1' }
            this.state = false
            this.dialogFormVisible = true
        },
        editHandle(row) {
            // console.log(row);
            // this.form = row;
            this.form = {...row}
            this.state = true
            this.dialogFormVisible = true
        },
        deleteHandle(row) {
        // 写法一：
            this.$confirm('Are you sure to delete the student\'s information?', 'Delete Remind', {
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            type: 'warning'
            }).then(() => {
            this.$message({
                type: 'success',
                message: `Delete ${row.name}\'s information has succeed!`
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: 'Cancelled delete'
            });          
            });
            // 写法二：
            // this.$alert('Are you sure to delete the student\'s information?', 'Delete Remind', {
            //    confirmButtonText: 'Confirm',
            //    callback: action => {
            //        this.$message({
            //            type: 'success',
            //            message: `Delete ${row.name}\'s information has succeed!`
            //        });
            //    } 
            // })
        },
    }
}
</script>

<style scoped>
.student-list {
    height: calc(100vh - 284px);
}
.student-list>.el-form {
    text-align: left;
    min-width: 1090px;
}
.student-list>.el-form .el-button.btn-addition,
.student-list>.el-form .el-button.btn-search {
    background-color: #10401c;
    border-color: #10401c;
    color: #d3d6d9;
}
.student-list .el-table .el-button.btn-edit {
    background-color: #10401c;
    border-color: #10401c;
    color: #d3d6d9;
}
.student-list .el-table .el-button.btn-del {
    background-color: rgba(255, 204, 102, .5);
    border-color: rgba(16, 64, 28, .2);
    color: #10401c;
}
.student-list .el-dialog .el-form-item {
    text-align: left;
}
.student-list .el-dialog .el-select {
    width: 100%;
}
.student-list .el-dialog .dialog-footer .btn-cancel {
    color: #10401c;
    border-color: #10401c;
}
.student-list .el-dialog .dialog-footer .btn-confirm {
    background-color: #10401c;
    color: #d3d6d9;
    border-color: #10401c;
}
.student-list .el-dialog .dialog-footer .btn-cancel:focus,
.student-list .el-dialog .dialog-footer .btn-cancel:hover {
    background-color: rgba(16,64,28,.1);
}
</style>