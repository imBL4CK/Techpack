ServerEvents.recipes(e =>{

     let baseMaterials = [
        'copper',
        'iron',
        'gold',
        'tin',
        'steel',
        'bronze',
        'invar',
        'brass',
        'aluminum',
        'aluminum_brass',
        'diamond',
        'netherite',
        'diamond',
        'brass',
        'zinc'
     ];

   baseMaterials.forEach(function(material) {
      let gears = {
         "type": "thermal:press",
         "ingredients": [
           {
             "tag": "forge:plates/"+ material,
             "count": 4
           },
           {
             "item": "thermal:press_gear_die"
           }
         ],
         "result": [
           {
             "tag": "forge:gears/"+ material
           }
         ]
      };
    e.custom(gears).id("thermal:press/"+ material)
  })
})