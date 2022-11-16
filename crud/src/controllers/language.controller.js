import { getConnection } from "./../database/database"

const getLanguages = async (req, res) => {
    try{    
        const conecction = await getConnection() 
        const result = await conecction.query("SELECT * FROM language")
        res.send(result)
        //res.render("clientes/index",{resultado:result})
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

const getLanguage = async (req, res) => {
    try{    
        const {language} = req.body
        console.log(language)
        const conecction = await getConnection() 
        const result = await conecction.query("SELECT * FROM language WHERE name='"+language+"'")
        console.log(result)
        res.send(result)
        //res.render("clientes/index",{resultado:result})
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

const addLanguageGet = (req, res) => {
    res.send("Pagina para agregar un lenguaje")
    //res.render("clientes/addLanguage")
}

const addLanguagePost = async (req, res) => {
    try{    
        console.log("body "+req.body)
        const {name, programmers} = req.body
        console.log(name+" "+programmers)
        const conecction = await getConnection() 
        const result = await conecction.query("INSERT INTO language (name, programmers) VALUES ('"+name+"',"+programmers+")")
        console.log(result)
        //res.redirect('/api/languages')
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

const editLanguageGet= async (req,res) => {
    try {
        const {id} = req.params
        const conecction = await getConnection()
        const result = await conecction.query("SELECT * FROM language WHERE id='"+id+"'")
        console.log(result)
        res.send("Pagina para editar un lenguaje")
        //res.render("clientes/editLanguage", {language: result[0]})

    } catch (error) {
        res.status(500).send(error.message)
    }

}

const editLanguagePost = async (req,res) => {
    try{    
        const {name, programmers, id} = req.body
        parseInt(id)
        const conecction = await getConnection() 
        const result = await conecction.query("UPDATE language SET name='"+name+"', programmers="+programmers+" WHERE id="+id)
        console.log(result)
        //res.redirect('/api/languages')
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

const deleteLanguage = async (req, res) => {
    try{    
        const {id} = req.params
        const conecction = await getConnection() 
        parseInt(id)
        const result = await conecction.query("DELETE FROM language WHERE id="+id)
        res.send("Eliminado con exito")
        //res.redirect('/api/languages')
    }
    catch(error){
        res.status(500).send(error.message)
    }    
}

export const methods = {
    getLanguages, getLanguage, addLanguageGet, addLanguagePost,
    editLanguageGet, editLanguagePost, deleteLanguage
}