const pool= require('./db');

const datalist = async() => {
    const [result] = await pool.query('SELECT * FROM comments')
    return result
}
const dateview = async (id) => {
    const [result] = await pool.query(`SELECT * FROM comments where id= ${id}`);
    return result
}
const datawrite = async({user_id,content}) => {
    const [result] =await pool.query(`INSERT INTO comments(user_id,content) values(${user_id},${content})`)
    return result
}
const dataslice = async(id) => {
    const result =await pool.query(`DELETE INTO comments where id= ${id}`)
}
const dataupdate = async({id,content}) => {
    const result = await pool.query(`UPDATE comments SET content= ${content} where id = ${id}`)
}

module.exports= {
    datalist,
    dateview,
    datawrite,
    dataslice,
    dataupdate
}