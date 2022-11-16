import mysql from "promise-mysql"
import config from "./../config"

const conecction = mysql.createConnection({
    host: 'localhost',
    database: 'crud',
    user: 'root',
    password: 'fransbompart'
})

const getConnection= () => {
    return conecction
}

module.exports = {
    getConnection
}