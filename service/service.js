const commetrepository = require('../repository/comments.repository')

const datalist = async() => {
    const result = await commetrepository.datalist()
    return result
}
const dateview = async(id) => {
    const [result] = await commetrepository.dateview(id)
    return result
}
const datawrite = async(data) => {
    const [result] = await commetrepository.datawrite(data)
    return result
}
const dataslice = async(id) => {
    const result = await commetrepository.dataslice(id)
    return result
}
const dataupdate = async(data) => {
    const result = await commetrepository.dataupdate(data)
    return result
}

module.exports= {
    datalist,
    dateview,
    datawrite,
    dataslice,
    dataupdate
}