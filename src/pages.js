const Database = require('./database/db.js');
const saveOrphanage = require('./database/saveOrphanage.js')
module.exports = {
  index(req, res) {
    const city = req.query.city;
    return res.render('index', { city });
  },
  async orphanage(req, res) {
   
    const id = req.query.id
    
    try{
      const db = await Database;
      const results = await db.all(`select * from orphanages where id ="${id}"`)
      const orphanage = results[0]
      console.log(orphanage.name)
     

      orphanage.images = orphanage.images.split(",")
      orphanage.firstImagem = orphanage.images[0] 
      console.log(orphanage.firstImagem)
      orphanage.opening_on_weekends === "0" ? orphanage.opening_on_weekends =false :orphanage.opening_on_weekends =true;
      return res.render('orphanage',{orphanage})

    }catch{

      console.log(error)
      return res.send('erro no banco de dados')
      
    }
  },
  async orphanages(req, res) {
    try{
      const db = await Database;
      const orphanages = await db.all("select * from orphanages")
      return res.render('orphanages',{orphanages})
  
  }catch{
      console.log(error)
      return res.send('erro no banco de dados')
    
    }
  },
  createOrphanage(req, res) {
    const city = req.query.city;
    return res.render('create-orphanage');
  },
  async saveOrphanage(req,res){
    const fields = req.body
    if(Object.values(fields).includes('')){
      return res.send('Todos os campos devem ser preenchidos!')
    }
    try{
      const db = await Database 
    await saveOrphanage(db,
      {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images,
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        opening_on_weekends: fields.opening_on_weekends,
      })
      return res.redirect('/orphanages')
    }catch{
      console.log(error)
      return res.send('erro no banco de dados')
    }
  }
}
