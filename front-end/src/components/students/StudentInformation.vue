<template>
    <div class="student-information">
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
                        <el-select v-model="formInline.studentId" placeholder="Please enter ID number">
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="btn-search" type="primary" @click="onSubmit" icon="el-icon-search">Search</el-button>
                    </el-form-item>
                </div>
            </el-form>
            <!-- 表格 -->
            <el-table :data="tableData.slice((currentPage - 1) * pageSize,currentPage * pageSize)" height="calc(100% - 103px)" border style="width: 100%">
                <el-table-column fixed align="center" prop="name" label="Name" width="120"></el-table-column>
                <el-table-column align="center" prop="gender_text" label="Gender" width="100"></el-table-column>
                <el-table-column align="center" prop="age" label="Age" width="100"></el-table-column>
                <el-table-column align="center" prop="birthDate" label="Birth Date" width="120"></el-table-column>
                <el-table-column align="center" prop="idNumber" label="ID Number" width="120"></el-table-column>
                <el-table-column align="center" prop="father" label="Father" width="120"></el-table-column>
                <el-table-column align="center" prop="mother" label="Mother" width="120"></el-table-column>
                <el-table-column align="center" prop="homeAddress" label="Home Address"></el-table-column>
                <el-table-column align="center" prop="inDate" label="In Date" width="120"></el-table-column>
                <el-table-column align="center" prop="concat" label="Concat" width="120"></el-table-column>
                <el-table-column align="center" label="Operate">
                    <template slot-scope="scope">
                        <el-button class="fontWeight btn-edit" size="mini" icon="el-icon-edit" @click="editHandle(scope.row)">Edit</el-button>
                        <el-button class="fontWeight btn-del" size="mini" type="danger" icon="el-icon-delete" @click="deleteHandle(scope.row)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <Paging :total="total" @numChange="pageChanges"></Paging>
             <!-- 弹窗 -->
            <el-dialog :title="state ? 'Edit Student Information' : 'Add Student Information'" :visible.sync="dialogFormVisible" width="550px">
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
                    <el-form-item label="Birth Date" :label-width="formLabelWidth">
                        <el-input v-model="form.birthDate" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="ID Number" :label-width="formLabelWidth">
                        <el-input v-model="form.idNumber" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Father" :label-width="formLabelWidth">
                        <el-input v-model="form.father" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Mother" :label-width="formLabelWidth">
                        <el-input v-model="form.mother" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Home Address" :label-width="formLabelWidth">
                        <el-input v-model="form.homeAddress" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="In Date" :label-width="formLabelWidth">
                        <el-input v-model="form.inDate" autocomplete="off"></el-input>
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
            tableData: [],
            formInline: {
                name: '',
                studentId: '',
                },
            dialogFormVisible: false,
            form: {
                name: '',
                gender: '1',
                age: '',
                birthDate: '',
                idNumber: '1',
                father: '1',
                mother: '',
                homeAddress: '',
                inDate: '',
                concat: '',
            },
            formLabelWidth: '120px',
            state: false,
            total: 0
        }
    },
    created() {
        this.service.get('/studentinformation')
        .then(res => {
            if(res.status === 200) {
                console.log(res);
                res.data.data.forEach(item => {
                    switch(item.gender) {
                        case "1":
                            item.gender_text = "男"
                            break;
                        case "2":
                            item.gender_text = "女"
                            break;  
                    }
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
            this.pageSize = pageSize;
            this.currentPage = currentPage;
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
        },
    }
}
</script>

<style scoped>
.student-information {
    height: calc(100vh - 284px);
}
.student-information>.el-form {
    text-align: left;
    min-width: 1090px;
}
.student-information>.el-form .el-button.btn-addition,
.student-information>.el-form .el-button.btn-search {
    background-color: #10401c;
    border-color: #10401c;
    color: #d3d6d9;
}
.student-information .el-table .el-button.btn-edit {
    background-color: #10401c;
    border-color: #10401c;
    color: #d3d6d9;
}
.student-information .el-table .el-button.btn-del {
    background-color: rgba(255, 204, 102, .5);
    border-color: rgba(16, 64, 28, .2);
    color: #10401c;
}
.student-information .el-dialog .el-form-item {
    text-align: left;
}
.student-information .el-dialog .el-select {
    width: 100%;
}
.student-information .el-dialog .dialog-footer .btn-cancel {
    color: #10401c;
    border-color: #10401c;
}
.student-information .el-dialog .dialog-footer .btn-confirm {
    background-color: #10401c;
    color: #d3d6d9;
    border-color: #10401c;
}
.student-information .el-dialog .dialog-footer .btn-cancel:focus,
.student-information .el-dialog .dialog-footer .btn-cancel:hover {
    background-color: rgba(16,64,28,.1);
}
</style>