// 获取数据
export function getData(root,url,params) {
    // 用root接收this
    root.service(url, { params: params || { pageSize: root.pageSize }})
    .then(res => {
        if(res.data.status === 200) {
            res.data.data.forEach(item => {
                if(item.gender === '1') {
                    item.gender_text = 'Male'
                }else if(item.gender === '2') {
                    item.gender_text = 'Female'
                }
            })
            root.tableData = [...res.data.data]
            root.total = res.data.total
        }
    })
    .catch(err => {
        throw err
    })
}
// 新增修改
export function changeData(root,method,url, obj,params) {
    root.service[method](url, obj)
    .then(res => {
        if(res.data.status === 200) {
            root.dialogFormVisible = false
            root.$message({
                type:'success',
                message: res.data.msg
            })
            getData(root, url, params)
        }
    })
    .catch(err => {
        throw err
    })
}

// 删除
export function removeData(root, url, obj, params) {
    this.$confirm('Are you sure to delete the student\'s information?', 'Delete Remind', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning',
        callback: action => {
            this.service.delete(url, { params: obj })
            .then(res => {
                if(res.data.status === 200) {
                    this.$message({ 
                        type: 'success',
                        message: res.data.msg
                    })
                    getData(root, url, params)
                }
            })
            .catch(err => {
                throw err
            })
        }
    })
}