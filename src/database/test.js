const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');
Database.then(async db =>{
    // insert
    await saveOrphanage(db,
        {
            id:2,
        lat:"-27.4513",
        lng:"-48.4931337",
        name:"lar das meninos",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        images:[
            "https://images.unsplash.com/photo-1596908876749-b8f0f3972240?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1596908876749-b8f0f3972240?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ],
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de visitas Das 18h até 8h",
        opening_on_weekends:"0"
        }
        
        )
    // select
    const selectOrpanhages = await db.all("select * from orphanages")
    console.log(selectOrpanhages)
})
