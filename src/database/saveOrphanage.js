function saveOrphanage(
  db,
  {
    lat,
    lng,
    name,
    about,
    whatsapp,
    images,
    instructions,
    opening_hours,
    opening_on_weekends,
  }
) {
  return db.run(`
    INSERT INTO orphanages (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        opening_on_weekends) 
    values(
        "${lat}",
        "${lng}",
        "${name}",
        "${about}",
        "${whatsapp}",
        "${images}",
        "${instructions}",
        "${opening_hours}",
        "${opening_on_weekends}"
    );
    `);
}
module.exports = saveOrphanage;
