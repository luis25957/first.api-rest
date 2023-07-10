//funciones para alterar las querys de los articulos
import {pool} from '../db.js'


// consultar  todos los articulos
export const getArticles = async (req, res) => {
  try{
    throw new Error('DB error')
    const [rows] = await pool.query('SELECT * FROM article');
    res.json(rows)
  }catch(error){
    return res.status(500).json({
        message: 'Something goes wrong'
    })
  }
}


// consultar articulos por medio del id
export const getArticle  = async (req,res) => {
    
   try{ 
    const [rows] = await pool.query('SELECT * FROM article where id = ?', [req.params.id])

    if(rows.length  <= 0 ){
        return res.status(404).json({message: 'Not found'})
    }
    
    res.json(rows[0])
    }catch(error){
      return res.status(500).json({
        message: 'Something goes wrong'
      })
    }

}


// crear articulos 
export const createArticles = async (req, res) => {
    
    try{
        const {name, price, category} = req.body
    
        const [rows] = await pool.query('INSERT INTO article (name, price, category) VALUES (?, ?, ?)', [name, price, category])
        res.send({ 
        id: rows.insertId,
        name,
        price,
        category,
    })}catch{
        return res.status(500).json({message: 'something goes wrong'}) 
    }
};


// borrar articulos seleccionados
export const deleteArticles = async (req, res) => {
   
   try{
        const [result] = await pool.query('DELETE FROM ARTICLE  WHERE id = ?' , [req.params.id])

        if(result.affectedRows <= 0){
        return res.status(404).json({message:'Article not found'})
        }

        console.log(result);

        res.sendStatus(204)

        res.send('article delete')
    }catch{
        return res.status(404).json({message:'Article not found'})
    }
};

// modificar articulos seleccionados
export const modifyArticles = async(req, res) => {
    try{
     const {id} = req.params
        const {name, price, category} = req.body
    
        const [result] = await pool.query('UPDATE article  Set name = IFNULL(?, name), price = IFNULL(?, price) , category = IFNULL(?, category) WHERE id = ?', [name , price, category, id])
    
        if(result.affectedRows === 0) return res.status(404).json({ message: 'Article not found'
        })

        const [rows] = await pool.query('SELECT * FROM article WHERE id = ?', [id])

        res.json(rows[0])
    }catch{
        return res.status(404).json({message:'Article not found'})
    }
};



