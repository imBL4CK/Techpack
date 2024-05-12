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
        'zinc'
     ];
     let CustomMaterials = [
      "mica",
      "stainless_steel",
      "tungsten",
      "tungstensteel",
      "red_alloy",
      "blue_alloy",
      "aluminum_brass",
      "draconium",
      "awakened_draconium",
      "manganese",
      "arcanite_alloy",
      "orichalcum",
      "compressed_steel",
      "crystaline_pink_slime",
      "vivid_alloy",
      "energetic_silver",
      "crystalline_alloy",
      "crude_steel",
      "melodic_alloy",
      "ferrous_pewter",
      "osgloglas"
     ];

    //Gears

  //Original Materials
  baseMaterials.forEach((Material) => {
    let gears = {
      "type": "thermal:press",
      "ingredients": [
        {
          "tag": "forge:plates/"+ Material,
          "count": 4
        },
        {
          "item": "thermal:press_gear_die"
        }
      ],
      "result": [
        {
          "tag": "forge:gears/"+ Material
        }
      ]
     };
    e.custom(gears).id("thermal:press/og/"+ Material)
  })
  //Custom Materials
  CustomMaterials.forEach((cMaterial) => {
    let gears = {
    "type": "thermal:press",
    "ingredients": [
      {
        "tag": "forge:plates/"+ cMaterial,
        "count": 4
      },
      {
        "item": "thermal:press_gear_die"
      }
    ],
    "result": [
      {
        "tag": "forge:gears/"+ cMaterial
      }
    ]
   };
  e.custom(gears).id("thermal:press/library"+ cMaterial)
 })

   //Plates
   
  //Custom Materials
  CustomMaterials.forEach((cMaterial) => {
    let gears = {
      "type": "create:pressing",
      "ingredients": [
        {
          "tag": "forge:ingots/"+cMaterial
        }
      ],
      "results": [
        {
          "tag": "forge:plates/"+cMaterial
        }
      ]
   };
  e.custom(gears).id("create/pressing/library"+ cMaterial)
 })
})