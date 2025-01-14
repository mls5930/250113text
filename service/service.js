const commetrepository = require('../repository/comments.repository')

const dataList = async() => {
    const result = await commetrepository.dataList()
    return result
}
const dateView = async(id) => {
    const result = await commetrepository.dateView(id)
    return result
}
const dataWrite = async(data) => {
    const result = await commetrepository.dataWrite(data)
    return result
}
const dataSlice = async(id) => {
    const result = await commetrepository.dataSlice(id)
    return result
}
const dataUpdate = async(id,data) => {
    const result = await commetrepository.dataUpdate(id,data)
    return result
}

module.exports= {
    dataList,
    dateView,
    dataWrite,
    dataSlice,
    dataUpdate
}