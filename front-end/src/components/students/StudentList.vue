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
                    <el-form-item label="studentId">
                        <el-input v-model="formInline.studentId" placeholder="Please enter studentId"></el-input>
                    </el-form-item>
                    <el-form-item label="className">
                        <el-select v-model="formInline.className" placeholder="Please select a className">
                        <el-option label="class01" value="1"></el-option>
                        <el-option label="class02" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="btn-search" type="primary" @click="searchHandle" icon="el-icon-search">Search</el-button>
                    </el-form-item>
                </div>
            </el-form>
            <!-- 表格 -->
            <el-table :data="tableData.slice((currentPage - 1) * pageSize,currentPage * pageSize)" height="calc(100% - 103px)" border style="width: 100%">
                <el-table-column fixed align="center" prop="name" label="Name" width="120"></el-table-column>
                <el-table-column align="center" prop="gender_text" label="Gender" width="120"></el-table-column>
                <el-table-column align="center" prop="age" label="Age" width="120"></el-table-column>
                <el-table-column align="center" prop="studentId" label="Student ID"></el-table-column>
                <el-table-column align="center" prop="className_text" label="Class"></el-table-column>
                <el-table-column align="center" prop="state_text" label="State" width="120"></el-table-column>
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
            <!-- <Paging :total="total" @numChange="pageChanges"></Paging> -->
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
             <!-- 弹窗 -->
            <el-dialog :title="state ? 'Edit Student Information' : 'Add Student Information'" :visible.sync="dialogFormVisible" width="520px">
                <el-form :model="form" :rules="rules" ref="form">
                    <el-form-item label="Name" :label-width="formLabelWidth" prop="name">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Gender" :label-width="formLabelWidth" prop="gender">
                        <el-radio v-model="form.gender" label="1">Male</el-radio>
                        <el-radio v-model="form.gender" label="2">Female</el-radio>
                    </el-form-item>
                    <el-form-item label="Age" :label-width="formLabelWidth" prop="age">
                        <el-input v-model="form.age" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="studentId" :label-width="formLabelWidth" prop="studentId">
                        <el-input v-model="form.studentId" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="ClassName" :label-width="formLabelWidth" prop="className">
                    <el-select v-model="form.className" placeholder="Please select a class">
                        <el-option label="class01" value="1"></el-option>
                        <el-option label="class02" value="2"></el-option>
                    </el-select>
                    </el-form-item>
                    <el-form-item label="State" :label-width="formLabelWidth" prop="state">
                        <el-select v-model="form.state" placeholder="Please select status">
                            <el-option label="在读" value="1"></el-option>
                            <el-option label="结业" value="2"></el-option>
                            <el-option label="休学" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Address" :label-width="formLabelWidth" prop="address">
                        <el-input v-model="form.address" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Concat" :label-width="formLabelWidth" prop="concat">
                        <!-- autocomplete自动补全记忆属性 -->
                        <el-input v-model="form.concat" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button class="btn-cancel" @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button class="btn-confirm fontWeight" type="primary" @click="AddConfirmHandle('form')">Confirm</el-button>
                </div>
            </el-dialog>
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
            rules: {
                name:[{ required: true, message: 'The name cannot be empty!' }],
                gender:[{ required: true }],
                age:[{ required: true, message: 'The age cannot be empty!' }],
                studentId:[{ required: true, message: 'The student cannot be empty!' }],
                className:[{ required: true }],
                state:[{ required: true }],
                address:[{ required: true, message: 'The address cannot be empty!' }],
                concat:[{ required: true, message: 'The concat cannot be empty!' }],
            },
            tableData: [],
            formInline: {
                name: '',
                studentId: '',
                className: ''
                },
            dialogFormVisible: false,
            form: {
                name: '',
                gender: '1',
                age: '',
                studentId: '',
                className: '1',
                state: '1',
                address: '',
                concat: '',
            },
            formLabelWidth: '90px',
            state: false,
            total: 0,
            currentPage: 1,
            // 每页显示条数
            pageSize: 20,
        }
    },
    created() {
        this.getListData('list')
    },
    methods: {
        getListData(url, obj) {
            this.service.get(url, obj)
            .then(res => {
            console.log(res);
            if(res.data.status === 200) {
                res.data.data.forEach(item => {
                    if(item.gender === '1') {
                        item.gender_text = 'Male'
                    }else if(item.gender === '2'){
                        item.gender_text = 'Female'
                    }
                    if(item.className === '1') {
                        item.className_text = 'class01'
                    }else if(item.className === '2') {
                        item.className_text = 'class02'
                    }
                    if(item.state === '1') {
                        item.state_text = '在读'
                    }else if(item.state === '2') {
                        item.state_text = '结业'
                    }else {
                        item.state_text = '休学'
                    }
                })
                this.tableData = [...res.data.data]
            }
        })
        .catch(err => {
            throw err
        }) 
        },
        searchHandle() {
            this.service.get('list', { params: this.formInline })
            .then(res => {
                if(res.data.status === 200) {
                    this.formInline = {}
                    res.data.data.forEach(item => {
                    if(item.gender === '1') {
                        item.gender_text = 'Male'
                    }else if(item.gender === '2'){
                        item.gender_text = 'Female'
                    }
                    if(item.className === '1') {
                        item.className_text = 'class01'
                    }else if(item.className === '2') {
                        item.className_text = 'class02'
                    }
                    if(item.state === '1') {
                        item.state_text = '在读'
                    }else if(item.state === '2') {
                        item.state_text = '结业'
                    }else {
                        item.state_text = '休学'
                    }
                })
                    this.tableData = [...res.data.data]
                    this.total = res.data.total
                }
                // console.log(res)
            })
            .catch(err => {
                throw err
            })
        },
        addOrUpdateListData(method, url, data, form) {
            // 添加
            // this.service.get('list', { params: this.form })
            this.service[method](url, data)
            .then(res => {
                // console.log(res);
                if(res.data.status === 200) {
                    this.$refs[form].resetFields()
                    this.$message({
                        type: 'success',
                        message: res.data.msg
                    })
                    // 清空表单
                    this.form = {}
                    this.dialogFormVisible = false
                    this.getListData(url)
                }
            })
            .catch(err => {
                throw err
            })
        },
        AddConfirmHandle(form) {
            this.$refs[form].validate(valid => {
                if(valid) {
                    // 获取表单元素
                    console.log(this.form);
                    // 根据状态判断新增还是修改，然后调用对应接口
                    if(!this.state) {
                        this.addOrUpdateListData('post', 'list', this.form, form)

                        // 添加
                        // this.service.get('list', { params: this.form })
                        // this.service.post('list', this.form)
                        // .then(res => {
                        //     // console.log(res);
                        //     if(res.data.status === 200) {
                        //         this.$refs[form].resetFields()
                        //         this.$message({
                        //             type: 'success',
                        //             message: res.data.msg
                        //         })
                        //         // 清空表单
                        //         this.form = {}
                        //         this.dialogFormVisible = false
                        //         this.getListData('list')
                        //     }
                        // })
                        // .catch(err => {
                        //     throw err
                        // })
                    }else {
                        // 修改
                        this.addOrUpdateListData('put', 'list', this.form, form)
                        // this.service.put('list', this.form)
                        // .then(res => {
                        //     if(res.data.status === 200) {
                        //         // console.log(res);
                        //         // 表单校验
                        //         this.$refs[form].resetFields()
                        //         this.$message({ 
                        //             type: 'success',
                        //             message: res.data.msg
                        //         })
                        //         this.form = {}
                        //         this.dialogFormVisible = false
                        //         this.getListData('list')
                        //     }
                        // })
                        // .catch(err => {
                        //     throw err
                        // })
                    }
                }else {
                    console.error(this.form)
                }
            })
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
        // 删除
        deleteHandle(row) {
        // 写法一：
            this.$confirm('Are you sure to delete the student\'s information?', 'Delete Remind', {
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            type: 'warning'
            }).then(() => {
            console.log(row)
            // 后端接收
            let obj = { studentId: row.studentId, name:row.name }
            this.service.delete('list', { params:obj })
            .then(res => {
                // console.log(res)
                if(res.data.status === 200) {
                    this.$message({
                    type: 'success',
                    // message: `Delete ${row.name}\'s information has succeed!`
                    message: res.data.msg
                });
                this.getListData('list')
                }
            })
            .catch(err => {
                throw err
            })
            
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
        handleSizeChange(val) {
            this.pageSize = val
            this.currentPage = 1
            // this.getAttendanceData('attendance/page?pageSize=' + val)
            this.getListData('list', { params: {pageSize: val} })
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val
            let obj = {
                params: {
                    currentPage: this.currentPage,
                    pageSize: this.pageSize
                }
            }
            this.getListData('list', obj)
        }
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
.student-list .el-pagination {
    margin-top: 20px;
    text-align: right;
}
</style>