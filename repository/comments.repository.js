const pool= require('./db');

const dataList = async() => {
    const [result] = await pool.query('SELECT * FROM comments');
    return result
}
const dateView = async (id) => {
    const [result] = await pool.query(`SELECT * FROM comments where id= "${id}"`);
    return result
}
const dataWrite = async({content}) => {
    const [result] =await pool.query(`INSERT INTO comments(user_id,content) values("rhgPtjd","${content}")`);
    return result
}
const dataSlice = async(id) => {
    await pool.query(`DELETE FROM comments where id= "${id}"`)
}
const dataUpdate = async(id,{content}) => {
    await pool.query(`UPDATE comments SET content= "${content}" where id= "${id}"`);
}

module.exports= {
    dataList,
    dateView,
    dataWrite,
    dataSlice,
    dataUpdate
}