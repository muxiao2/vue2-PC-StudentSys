<template>
    <div class="paging">
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            :callback="callback">
        </el-pagination>
    </div>
</template>

<script>

export default {
    props: {
        'total': Number,
        'callback': Function
    },
    data() {
        return {
            currentPage: 1,
            // 每页显示条数
            pageSize: 20,
        }
    },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val
            this.currentPage = 1
            this.callback({ pageSize: val })
        // console.log(`每页 ${val} 条`);
            // this.$emit("numChange", this.currentPage, this.pageSize)
        },
        handleCurrentChange(val) {
            this.currentPage = val
            let obj = {
                currentPage: this.currentPage,
                pageSize: this.pageSize
            }
            this.callback(obj)
            // console.log(`当前页: ${val}`);
            // this.$emit("numChange", this.currentPage, this.pageSize)
        }
    }
}
</script>

<style scoped>
.paging .el-pagination {
    margin-top: 20px;
    text-align: right;
}
</style>