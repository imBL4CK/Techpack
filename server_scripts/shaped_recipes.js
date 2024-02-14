   ServerEvents.recipes(event =>{
    event.shaped('minecraft:crafting_table',[
      'GC ',
      'SW '
    ],{
      S: 'woodenshears:wooden_shears',
      C: { tag: 'minecraft:wool_carpets' },
      G: 'kubejs:wooden_gear',
      W: { tag: 'minecraft:logs' }
    })  
  }),
   ServerEvents.recipes(event =>{
    event.shaped('minecraft:white_carpet',[
      'SL ',
    ],{
      S: 'woodenshears:wooden_shears',
      L: { tag: 'minecraft:leaves' }
    })  
  }), 
   ServerEvents.recipes(event =>{
    event.shaped('kubejs:wooden_gear',[
      'SS ',
      'SP '
    ],{
      S: 'minecraft:stick',
      P: { tag: 'minecraft:planks' }
    })  
  }), 
   ServerEvents.recipes(event =>{
    event.shaped('6x railcraft:water_tank_siding',[
      'PPP',
      'SCI',
      'PPP'
    ],{
      I: { tag: 'forge:plates/iron' },
      P: 'kubejs:wooden_board',
      C: { tag: 'forge:plates/copper' },
      S: 'kubejs:primitive_hammer'
    }).damageIngredient('kubejs:primitive_hammer', '12')
  }),
   ServerEvents.recipes(event =>{
    event.shaped('minecraft:chest',[
      'PGP',
      'GBG',
      'PGP'
    ],{
      G: 'kubejs:wooden_gear',
      P: { tag: 'minecraft:planks' },
      B: 'minecraft:stone_button'
    })  
  }),
  ServerEvents.recipes(event =>{
    event.shaped('minecraft:furnace',[
      'SSS',
      'SGS',
      'SFS'
    ],{
      G: 'kubejs:wooden_gear',
      S: { tag: 'forge:cobblestone' },
      F: 'minecraft:flint'
    })  
  }),
  ServerEvents.recipes(event =>{
    event.shaped('create:hand_crank',[
      'GWW',
      'SCA'
    ],{
      A: 'create:andesite_alloy',
      G: 'kubejs:wooden_gear',
      W: 'kubejs:wooden_board',
      C: 'create:cogwheel',
      S: 'kubejs:primitive_saw'
    }).damageIngredient('kubejs:primitive_saw', '2')  
  }),
  ServerEvents.recipes(event =>{
    event.shaped('create:water_wheel',[
      'WSW',
      'GHM',
      'WCW'
    ],{
      G: 'kubejs:wooden_gear',
      W: 'kubejs:wooden_board',
      H: 'create:hand_crank',
      S: 'kubejs:primitive_saw',
      M: 'kubejs:primitive_hammer',
      C: 'kubejs:primitive_crowbar'
    }).damageIngredient('kubejs:primitive_saw', '6') 
      .damageIngredient('kubejs:primitive_hammer', '6') 
      .damageIngredient('kubejs:primitive_crowbar', '6') 
  }),
  
  ServerEvents.recipes(event =>{
    event.shaped('create:large_water_wheel',[
      'WGW',
      'SLH',
      'WGW'
    ],{
      G: 'kubejs:wooden_gear',
      W: 'kubejs:wooden_board',
      S: 'kubejs:primitive_saw',
      L: 'create:water_wheel',
      H: 'kubejs:primitive_hammer'
    }).damageIngredient('kubejs:primitive_saw', '4') 
      .damageIngredient('kubejs:primitive_hammer', '4')
  }),
  
  ServerEvents.recipes(event =>{
    event.shaped('minecraft:smithing_table',[
      'HSW',
      'II ',
      'PG '
    ],{
      G: 'kubejs:wooden_gear',
      P: { tag: 'minecraft:planks' },
      S: 'kubejs:primitive_saw',
      I: 'minecraft:iron_ingot',
      H: 'kubejs:primitive_hammer',
      W: 'kubejs:primitive_wirecutter'
    }).damageIngredient('kubejs:primitive_saw', '6') 
      .damageIngredient('kubejs:primitive_hammer', '6')
      .damageIngredient('kubejs:primitive_wirecutter', '6')
  }),
  ServerEvents.recipes(event =>{
    event.shaped('kubejs:primitive_hammer',[
      ' II',
      ' PI',
      'S  '
    ],{
      I: 'minecraft:iron_ingot',
      P: { tag: 'minecraft:planks' },
      S: 'minecraft:stick'
    })  
  }),
  ServerEvents.recipes(event =>{
    event.shaped('minecraft:bucket',[
      'IHI',
      ' I ',
      '   '
    ],{
      I: { tag: 'forge:plates/iron' },
      H: 'kubejs:primitive_hammer'
    }).damageIngredient('kubejs:primitive_hammer', '4')
  }),
  
  ServerEvents.recipes(event =>{
    event.shaped('create:millstone',[
      ' C ',
      'HAP',
      'GSG'
    ],{
      A: 'create:andesite_casing',
      S: { tag: 'forge:stone' },
      C: 'create:cogwheel',
      H: 'kubejs:primitive_hammer',
      P: 'kubejs:primitive_saw',
      G: 'kubejs:wooden_gear'
    }).damageIngredient('kubejs:primitive_hammer', '16')
      .damageIngredient('kubejs:primitive_saw', '16')
  }),
  
  ServerEvents.recipes(event =>{
    event.shaped('create:wrench',[
      'GGH',
      'GCW',
      ' S '
    ],{
      C: 'create:cogwheel',
      H: 'kubejs:primitive_hammer',
      S: 'minecraft:stick',
      W: 'kubejs:wooden_gear',
      G: { tag: 'forge:plates/gold'}
    }).damageIngredient('kubejs:primitive_hammer', '4')
  }),

  ServerEvents.recipes(event =>{
    event.shaped('create:empty_blaze_burner',[
      'HSC',
      'BNB',
      'IVI'
    ],{
      N: 'minecraft:netherrack',
      S: 'occultism:spirit_attuned_gem',
      H: 'kubejs:primitive_hammer',
      C: 'kubejs:primitive_crowbar',
      V: 'create_things_and_misc:vibration_mechanism',
      I: { tag: 'forge:plates/iron'},
      B: 'minecraft:iron_bars'
    }).damageIngredient('kubejs:primitive_hammer', '2')
      .damageIngredient('kubejs:primitive_crowbar', '2')
  }),

  ServerEvents.recipes(event =>{
    event.shaped('6x minecraft:iron_bars',[
      'HSC',
      'III',
      'III'
    ],{
      I: { tag: 'forge:plates/iron'},
      H: 'kubejs:primitive_hammer',
      S: 'kubejs:primitive_saw',
      C: 'kubejs:primitive_crowbar'
    }).damageIngredient('kubejs:primitive_hammer', '6')
      .damageIngredient('kubejs:primitive_saw', '6')
      .damageIngredient('kubejs:primitive_crowbar', '6')
  }),
  ServerEvents.recipes(event =>{
    event.shaped('create:andesite_funnel',[
      'CS ',
      'M  '
    ],{
      M: 'kubejs:makeshift_mechanism',
      S: 'kubejs:primitive_saw',
      C: 'create:andesite_casing'
    }).damageIngredient('kubejs:primitive_saw', '1')
  }), 
  ServerEvents.recipes(event =>{
    event.shaped('create:andesite_tunnel',[
      'CCS',
      'MMD'
    ],{
      M: 'kubejs:makeshift_mechanism',
      S: 'kubejs:primitive_saw',
      C: 'create:andesite_casing',
      D: 'tfmg:screwdriver'
    }).damageIngredient('kubejs:primitive_saw', '1')
      .damageIngredient('tfmg:screwdriver', '1')
  }),
  ServerEvents.recipes(event =>{
    event.shaped('create:mechanical_harvester',[
      'CAS',
      'MI '
    ],{
      M: 'kubejs:makeshift_mechanism',
      S: 'kubejs:primitive_saw',
      C: 'create:andesite_casing',
      A: 'createdeco:andesite_sheet',
      I: '#forge:plates/iron'
    }).damageIngredient('kubejs:primitive_saw', '4')
  })
  ServerEvents.recipes(event =>{
    event.shaped('create:mechanical_plough',[
      'CIS',
      'MI '
    ],{
      M: 'kubejs:makeshift_mechanism',
      S: 'kubejs:primitive_saw',
      C: 'create:andesite_casing',
      I: '#forge:plates/iron'
    }).damageIngredient('kubejs:primitive_saw', '1')
  }),
  ServerEvents.recipes(event =>{
    event.shaped('create:contraption_controls',[
      'CBS',
      'MH '
    ],{
      M: 'kubejs:makeshift_mechanism',
      S: 'kubejs:primitive_saw',
      C: 'create:andesite_casing',
      B: '#minecraft:buttons',
      H: 'kubejs:primitive_hammer'
    }).damageIngredient('kubejs:primitive_saw', '1')
      .damageIngredient('kubejs:primitive_hammer', '1')
  }),
  ServerEvents.recipes(event =>{
    event.shaped('create:portable_storage_interface',[
      'CUS',
      'MH '
    ],{
      M: 'kubejs:makeshift_mechanism',
      S: 'kubejs:primitive_saw',
      C: 'create:andesite_casing',
      U: 'create:chute',
      H: 'kubejs:primitive_hammer'
    }).damageIngredient('kubejs:primitive_saw', '1')
      .damageIngredient('kubejs:primitive_hammer', '1')
  }),
  ServerEvents.recipes(event =>{
    event.shaped('create:chute',[
      'PH ',
      'IS ',
      'PC '
    ],{
      P: '#forge:plates/iron',
      I: 'minecraft:iron_ingot',
      H: 'kubejs:primitive_hammer',
      S: 'kubejs:primitive_saw',
      C: 'kubejs:primitive_crowbar'
    }).damageIngredient('kubejs:primitive_saw', '1')
      .damageIngredient('kubejs:primitive_hammer', '1')
      .damageIngredient('kubejs:primitive_crowbar', '1'),
    
    event.shaped('thermal:device_tree_extractor',[
      'WSW',
      'DBH',
      'WGW'
    ],{
      W: 'kubejs:wooden_board',
      S: '#forge:tools/saw',
      D: '#forge:tools/screwdriver',
      B: 'minecraft:bucket',
      H: '#forge:tools/hammer',
      G: '#forge:gears/iron'
    }).damageIngredient('#forge:tools/saw', '1')
    .damageIngredient('#forge:tools/hammer', '1')
    .damageIngredient('#forge:tools/screwdriver', '1'),

    event.shaped('create:fluid_tank',[
      'DCS',
      'RGR',
      'HCB'
    ],{
      D: '#forge:tools/screwdriver',
      C: '#forge:plates/copper',
      S: '#forge:tools/saw',
      R: 'thermal:cured_rubber',
      H: '#forge:tools/hammer',
      B: '#forge:tools/crowbar',
      G: '#forge:glass_panes'
    }).damageIngredient('#forge:tools/saw', '4')
      .damageIngredient('#forge:tools/hammer', '2')
      .damageIngredient('#forge:tools/crowbar', '2')
      .damageIngredient('#forge:tools/screwdriver', '1'),

      event.shaped('4x create:fluid_pipe',[
        'SCB',
        'HRD',
        ' C '
      ],{
        C: '#forge:plates/copper',
        D: '#forge:tools/screwdriver',
        S: '#forge:tools/saw',
        R: 'thermal:cured_rubber',
        H: '#forge:tools/hammer',
        B: '#forge:tools/crowbar'
      }).damageIngredient('#forge:tools/saw', '2')
        .damageIngredient('#forge:tools/hammer', '2')
        .damageIngredient('#forge:tools/crowbar', '2')
        .damageIngredient('#forge:tools/screwdriver', '1'),
      
      event.shaped('create:mechanical_pump',[
        'SPB',
        'HCD',
        ' R '
      ],{
        P: 'create:fluid_pipe',
        C: 'create:cogwheel',    
        D: '#forge:tools/screwdriver',
        S: '#forge:tools/saw',
        R: 'thermal:cured_rubber',
        H: '#forge:tools/hammer',
        B: '#forge:tools/crowbar'
      }).damageIngredient('#forge:tools/saw', '2')
        .damageIngredient('#forge:tools/hammer', '2')
        .damageIngredient('#forge:tools/crowbar', '2')
        .damageIngredient('#forge:tools/screwdriver', '1'),
      
      event.shaped('create:belt_connector',[
          'SW ',
          'RRR',
          'RRR'
      ],{
        R: 'thermal:cured_rubber',
        S: '#forge:tools/saw',
        W: '#forge:tools/wirecutter'
      }).damageIngredient('#forge:tools/saw', '1')
        .damageIngredient('#forge:tools/wirecutter', '1')
      
      event.shaped('tfmg:fireproof_bricks',[
          'FPG',
          'PF '
      ],{
        F: 'tfmg:fireproof_brick',
        P: 'eidolon:pewter_ingot',
        G: 'create:super_glue'
      }).damageIngredient('create:super_glue', '1')

      event.shaped('tfmg:blast_furnace_output',[
        'PBV',
        'WFW',
        'CHC'
    ],{
      B: 'minecraft:iron_bars',
      P: 'create:precision_mechanism',
      V: 'create_things_and_misc:vibration_mechanism',
      F: 'tfmg:fireproof_bricks',
      W: 'eidolon:pewter_ingot',
      C: 'tfmg:cast_iron_pipe',
      H: '#forge:tools/hammer'
    }).damageIngredient('#forge:tools/hammer', '1')
//imcompleto
    event.shaped('tfmg:casting_spout',[
      'CAS',
      'MI '
    ],{
      M: 'kubejs:makeshift_mechanism',
      S: '#forge:tools/saw',
      C: 'create:andesite_casing',
      A: 'createdeco:andesite_sheet',
      I: '#forge:plates/iron'
    }).damageIngredient('#forge:tools/saw', '1')
  })
