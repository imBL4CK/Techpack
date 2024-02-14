ServerEvents.recipes(event =>{
    event.shapeless('minecraft:flint',[
    'minecraft:gravel',
    'minecraft:gravel',
    'minecraft:gravel'
    ])
  }), 
  ServerEvents.recipes(event =>{
    event.shapeless('tfmg:screwdriver',[
      { tag: 'forge:rods/iron' },
      'kubejs:primitive_hammer',
      'kubejs:primitive_saw',
      'minecraft:iron_ingot'
    ]).damageIngredient('kubejs:primitive_saw', '5')
      .damageIngredient('kubejs:primitive_hammer', '5')  
  }),
  ServerEvents.recipes(event =>{
    event.shapeless('4x create:shaft',[
      'create:andesite_alloy',
      'kubejs:primitive_saw'
    ]).damageIngredient('kubejs:primitive_saw', '4') 
  }),
  
  ServerEvents.recipes(event =>{
    event.shapeless('create:cogwheel',[
      'create:shaft',
      'kubejs:wooden_gear',
      'kubejs:primitive_hammer',
      'kubejs:primitive_saw'
    ]).damageIngredient('kubejs:primitive_hammer', '2') 
      .damageIngredient('kubejs:primitive_saw', '2')
  }),
  
  ServerEvents.recipes(event =>{
    event.shapeless('create:large_cogwheel',[
      'create:cogwheel',
      'kubejs:wooden_gear',
      'kubejs:primitive_saw', 
      'kubejs:primitive_hammer'
    ]).damageIngredient('kubejs:primitive_hammer', '2') 
      .damageIngredient('kubejs:primitive_saw', '2')
  }),
  ServerEvents.recipes(event =>{
    event.shapeless('thermal:saw_blade',[
      { tag: 'forge:plates/iron' },
      { tag: 'forge:plates/copper' },
      'kubejs:primitive_hammer',
      'kubejs:primitive_saw'
    ]).damageIngredient('kubejs:primitive_hammer', '4') 
      .damageIngredient('kubejs:primitive_saw', '4')
  }),
  ServerEvents.recipes(event =>{
    event.shapeless('kubejs:primitive_saw',[
      { tag: 'forge:plates/iron' },
      'kubejs:primitive_hammer',
      'kubejs:wooden_board',
      'minecraft:stick'
    ]).damageIngredient('kubejs:primitive_hammer', '1') 
  }),

  ServerEvents.recipes(event =>{
    event.shapeless('kubejs:primitive_wirecutter',[
      { tag: 'forge:plates/iron' },
      'kubejs:primitive_saw',
      'kubejs:primitive_hammer',
      'kubejs:wooden_board',
      'minecraft:iron_nugget'
    ]).damageIngredient('kubejs:primitive_saw', '4') 
      .damageIngredient('kubejs:primitive_hammer', '4')
  }),
  
  ServerEvents.recipes(event =>{
    event.shapeless('kubejs:primitive_crowbar',[
      { tag: 'forge:plates/iron' },
      { tag: 'forge:plates/iron' },
      'kubejs:primitive_saw',
      'kubejs:primitive_hammer',
      'kubejs:wooden_board',
      'kubejs:wooden_gear',
      'minecraft:stick'
    ]).damageIngredient('kubejs:primitive_saw', '4') 
      .damageIngredient('kubejs:primitive_hammer', '4')
  }),
  
  ServerEvents.recipes(event =>{
    event.shapeless('create:iron_sheet',[
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
      'kubejs:primitive_hammer'
      
    ]).damageIngredient('kubejs:primitive_hammer', '2') 
  }),
  
  ServerEvents.recipes(event =>{
    event.shapeless('create:copper_sheet',[
      'minecraft:copper_ingot',
      'minecraft:copper_ingot',
      'kubejs:primitive_hammer'
      
    ]).damageIngredient('kubejs:primitive_hammer', '2') 
  }),
  
  ServerEvents.recipes(event =>{
    event.shapeless('4x kubejs:wooden_board',[
      { tag: 'minecraft:planks'},
      { tag: 'minecraft:planks'},
      'kubejs:primitive_hammer'
      
    ]).damageIngredient('kubejs:primitive_hammer', '2') 
  }),

  ServerEvents.recipes(event =>{
    event.shapeless('ad_astra:iron_rod',[
      { tag: 'forge:plates/iron' },
      { tag: 'forge:plates/iron' },
      'kubejs:primitive_hammer',
      'kubejs:primitive_saw'

    ]).damageIngredient('kubejs:primitive_hammer', '2') 
      .damageIngredient('kubejs:primitive_saw', '2')
})