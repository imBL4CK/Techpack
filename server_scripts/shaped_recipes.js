   ServerEvents.recipes(event =>{
    //Crafting Table
    event.shaped('minecraft:crafting_table',[
      'GC ',
      'SW '
    ],{
      S: 'woodenshears:wooden_shears',
      C: '#minecraft:wool_carpets',
      G: 'kubejs:wooden_gear',
      W: '#minecraft:logs'
    }) 

    //White Carpet
      event.shaped('minecraft:white_carpet',[
        'SL ',
      ],{
        S: 'woodenshears:wooden_shears',
        L: { tag: 'minecraft:leaves' }
      }) 

      //Wooden Gear
      event.shaped('kubejs:wooden_gear',[
        'SS ',
        'SP '
      ],{
        S: 'minecraft:stick',
        P: { tag: 'minecraft:planks' }
      })

      //Water Tank Sidding
      event.shaped('6x railcraft:water_tank_siding',[
        'PPP',
        'SCI',
        'PPP'
      ],{
        I: '#forge:plates/iron',
        P: '#forge:plates/wooden',
        C: '#forge:plates/copper',
        S: '#forge:tools/hammer'

      //Primitive Hammer
      }).damageIngredient('#forge:tools/hammer', '12')
      event.shaped('minecraft:chest',[
        'PGP',
        'GBG',
        'PGP'
      ],{
        G: '#forge:gears/wooden',
        P: '#minecraft:planks',
        B: 'minecraft:stone_button'
      }) 

      //Furnace
      event.shaped('minecraft:furnace',[
        'SSS',
        'SGS',
        'SFS'
      ],{
        G: 'kubejs:wooden_gear',
        S: '#forge:cobblestone',
        F: 'minecraft:flint'
      })   

      //Hand Crank
      event.shaped('create:hand_crank',[
        'GWW',
        'SCA'
      ],{
        A: 'create:andesite_alloy',
        G: '#forge:gears/wooden',
        W: '#forge:plates/wooden',
        C: 'create:cogwheel',
        S: '#forge:tools/saw'
      }).damageIngredient('#forge:tools/saw', '2')  

      //Small Water Wheel
      event.shaped('create:water_wheel',[
        'WSW',
        'GHM',
        'WCW'
      ],{
        G: '#forge:gears/wooden',
        W: '#forge:plates/wooden',
        H: 'create:hand_crank',
        S: '#forge:tools/saw',
        M: '#forge:tools/hammer',
        C: '#forge:tools/crowbar'
      }).damageIngredient('#forge:tools/saw', '6') 
        .damageIngredient('#forge:tools/hammer', '6') 
        .damageIngredient('#forge:tools/crowbar', '6')

    //Large Water Wheel
      event.shaped('create:large_water_wheel',[
      'WGW',
      'SLH',
      'WGW'
    ],{
      G: '#forge:gears/wooden',
      W: '#forge:plates/wooden',
      S: '#forge:tools/saw',
      L: 'create:water_wheel',
      H: '#forge:tools/hammer'
    }).damageIngredient('#forge:tools/saw', '4') 
      .damageIngredient('#forge:tools/hammer', '4')

    //Smithing Table
    event.shaped('minecraft:smithing_table',[
      'HSW',
      'II ',
      'PG '
    ],{
      G: '#forge:gears/wooden',
      P: '#minecraft:planks',
      S: '#forge:tools/saw',
      I: 'minecraft:iron_ingot',
      H: '#forge:tools/hammer',
      W: '#forge:tools/wirecutter',
    }).damageIngredient('#forge:tools/saw', '6') 
      .damageIngredient('#forge:tools/hammer', '6')
      .damageIngredient('#forge:tools/wirecutter', '6')

    //Primitive Hammer
    event.shaped('kubejs:primitive_hammer',[
      ' II',
      ' PI',
      'S  '
    ],{
      I: 'minecraft:iron_ingot',
      P: '#minecraft:planks',
      S: 'minecraft:stick'
    })

    //Bucket
    event.shaped('minecraft:bucket',[
      'IHI',
      ' I '
    ],{
      I: '#forge:plates/iron',
      H: '#forge:tools/hammer',
    }).damageIngredient('#forge:tools/hammer', '4')

    //Millstone
    event.shaped('create:millstone',[
      ' C ',
      'HAP',
      'GSG'
    ],{
      A: 'create:andesite_casing',
      S: '#forge:stone',
      C: 'create:cogwheel',
      H: '#forge:tools/hammer',
      P: '#forge:tools/saw',
      G: '#forge:gears/wooden'
    }).damageIngredient('#forge:tools/hammer', '16')
      .damageIngredient('#forge:tools/saw', '16')

    //Create Wrench
    event.shaped('create:wrench',[
      'GGH',
      'GCW',
      ' S '
    ],{
      C: 'create:cogwheel',
      H: '#forge:tools/hammer',
      S: 'minecraft:stick',
      W: '#forge:gears/wooden',
      G: '#forge:plates/gold'
    }).damageIngredient('#forge:tools/hammer', '4')

    //Empty Blaze Burner
    event.shaped('create:empty_blaze_burner',[
      'HSC',
      'BNB',
      'IVI'
    ],{
      N: 'minecraft:netherrack',
      S: 'occultism:spirit_attuned_gem',
      H: '#forge:tools/hammer',
      C: '#forge:tools/crowbar',
      V: 'create_things_and_misc:vibration_mechanism',
      I: '#forge:plates/iron',
      B: 'minecraft:iron_bars'
    }).damageIngredient('#forge:tools/hammer', '2')
      .damageIngredient('#forge:tools/crowbar', '2')

      //Iron Bars
      event.shaped('6x minecraft:iron_bars',[
        'HSC',
        'III',
        'III'
      ],{
        I: '#forge:plates/iron',
        H: '#forge:tools/hammer',
        S: '#forge:tools/saw',
        C: '#forge:tools/crowbar'
      }).damageIngredient('#forge:tools/hammer', '6')
        .damageIngredient('#forge:tools/saw', '6')
        .damageIngredient('#forge:tools/crowbar', '6')

      //Andesite Funnel
      event.shaped('create:andesite_funnel',[
        'CS ',
        'M  '
      ],{
        M: 'kubejs:makeshift_mechanism',
        S: '#forge:tools/saw',
        C: 'create:andesite_casing'
      }).damageIngredient('#forge:tools/saw', '1')

      //Andesite Tunnel
      event.shaped('create:andesite_tunnel',[
        'CCS',
        'MMD'
      ],{
        M: 'kubejs:makeshift_mechanism',
        S: '#forge:tools/saw',
        C: 'create:andesite_casing',
        D: '#forge:tools/screwdriver'
      }).damageIngredient('#forge:tools/saw', '1')
        .damageIngredient('#forge:tools/screwdriver', '1')

        //Mechanical Harvester
        event.shaped('create:mechanical_harvester',[
          'CAS',
          'MI '
        ],{
          M: 'kubejs:makeshift_mechanism',
          S: '#forge:tools/saw',
          C: 'create:andesite_casing',
          A: 'createdeco:andesite_sheet',
          I: '#forge:plates/iron'
        }).damageIngredient('#forge:tools/saw', '4')

        //Mechanical Plough
        event.shaped('create:mechanical_plough',[
          'CIS',
          'MI '
        ],{
          M: 'kubejs:makeshift_mechanism',
          S: '#forge:tools/saw',
          C: 'create:andesite_casing',
          I: '#forge:plates/iron'
        }).damageIngredient('#forge:tools/saw', '1')

        //Contraption Controls
        event.shaped('create:contraption_controls',[
          'CBS',
          'MH '
        ],{
          M: 'kubejs:makeshift_mechanism',
          S: '#forge:tools/saw',
          C: 'create:andesite_casing',
          B: '#minecraft:buttons',
          H: '#forge:tools/hammer'
        }).damageIngredient('#forge:tools/saw', '1')
          .damageIngredient('#forge:tools/hammer', '1')

        //Portable Storage interface
        event.shaped('create:portable_storage_interface',[
          'CUS',
          'MH '
        ],{
          M: 'kubejs:makeshift_mechanism',
          S: '#forge:tools/saw',
          C: 'create:andesite_casing',
          U: 'create:chute',
          H: '#forge:tools/hammer'
        }).damageIngredient('#forge:tools/saw', '1')
          .damageIngredient('#forge:tools/hammer', '1')
          
    //Chute
    event.shaped('create:chute',[
      'PH ',
      'IS ',
      'PC '
    ],{
      P: '#forge:plates/iron',
      I: 'minecraft:iron_ingot',
      H: '#forge:tools/hammer',
      S: '#forge:tools/saw',
      C: '#forge:tools/crowbar'
    }).damageIngredient('#forge:tools/saw', '1')
      .damageIngredient('#forge:tools/hammer', '1')
      .damageIngredient('#forge:tools/crowbar', '1'),

    //Arboreal Extractor
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
    //Create Copper Fluid Tank
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
      //Create Copper Fluid Pipe
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

      //Create Copper Mechanical Pump
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
      
      //Create Belt
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
      
      //Tfg Fiproof Bricks Block
      event.shaped('tfmg:fireproof_bricks',[
          'FPG',
          'PF '
      ],{
        F: 'tfmg:fireproof_brick',
        P: 'eidolon:pewter_ingot',
        G: 'create:super_glue'
      }).damageIngredient('create:super_glue', '1')

      //Tfmg: Blast Furnace Output
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
      'CAC',
      'CIC'
    ],{
      M: 'kubejs:makeshift_mechanism',
      S: '#forge:tools/hammer',
      C: '#forge:plates/cast_iron',
      A: 'createdeco:andesite_sheet',
      I: '#forge:plates/iron'
    }).damageIngredient('#forge:tools/hammer', '1')
//Rf Coil
    event.shaped('thermal:rf_coil',[
      'GR ',
      ' E ',
      ' RG'
    ],{
      E: 'create:electron_tube',
      G: '#forge:plates/gold',
      R: '#forge:plates/red_alloy'
    })
//Primitive Circuit Board
    event.shaped('kubejs:primitive_circuit_board',[
      'BRD',
      'SPI',
      'CRB'
    ],{
      P: '#forge:plates/ferrous_pewter',
      B: '#forge:wires/blue_alloy',
      R: '#forge:wires/red_alloy',
      I: 'kubejs:primitive_io_component',
      S: '#forge:tools/saw',
      D: '#forge:tools/screwdriver',
      C: 'create_new_age:copper_circuit'
    }).damageIngredient('#forge:tools/screwdriver', '1')
      .damageIngredient('#forge:tools/saw', '1')
//Eidolon: Worktable
  event.shaped('eidolon:worktable',[
      'ORI',
      'WAW',
      'BPB'
    ],{
      A: 'occultism:otherworld_ashes',
      P: '#minecraft:planks',
      B: '#forge:plates/wooden',
      W: '#forge:plates/pewter',
      R: '#forge:plates/red_alloy',
      O: 'minecraft:book',
      I: 'minecraft:ink_sac'
    })
//Tfmg Steel Tank
  event.shaped('tfmg:steel_fluid_tank',[
    'BSB',
    'HCG',
    'BSB'
  ],{
    S: '#forge:plates/steel',
    C: 'create:fluid_tank',
    G: 'create:super_glue',
    H: '#forge:tools/hammer',
    B: 'thermal:cured_rubber'
    }).damageIngredient('#forge:tools/hammer', '1')
  //Create DG Basin Lid
    event.shaped('createdieselgenerators:basin_lid',[
      'SSS',
      'HCW',
      'BRD'
    ],{
      S: '#forge:plates/steel',
      H: '#forge:tools/hammer',
      W: '#forge:tools/saw',
      C: 'minecraft:clock',
      B: '#forge:tools/crowbar',
      R: 'tfmg:screw',
      D: '#forge:tools/screwdriver'
      }).damageIngredient('#forge:tools/hammer', '1')
        .damageIngredient('#forge:tools/saw', '1')
        .damageIngredient('#forge:tools/crowbar', '1')
        .damageIngredient('#forge:tools/screwdriver', '1')
    //Clock
    event.shaped('minecraft:clock',[
      'HGS',
      'GRG',
      'CGC'
    ],{
      G: '#forge:plates/gold',
      R: '#forge:gears/red_alloy',
      H: '#forge:tools/hammer',
      S: '#forge:tools/saw',
      C: '#forge:wires/copper'
      }).damageIngredient('#forge:tools/hammer', '1')
        .damageIngredient('#forge:tools/saw', '1')

    //Rolling Machine (!Imcomplete!)
    event.shaped('createaddition:rolling_mill',[
      'ISI',
      'ASA',
      'WCH'
    ],{
      S: 'create:shaft',
      I: '#forge:plates/iron',
      C: 'create:andesite_casing',
      A: 'createdeco:andesite_sheet',
      H: '#forge:tools/hammer',
      W: '#forge:tools/saw'
      }).damageIngredient('#forge:tools/hammer', '4')
        .damageIngredient('#forge:tools/saw', '2')
    //Mechanical Crafter
    event.shaped('create:mechanical_crafter',[
      'VEP',
      'SBH',
      'RCD'
    ],{
      E: 'create:electron_tube',
      B: 'create:brass_casing',
      C: 'minecraft:crafting_table',
      V: 'create_things_and_misc:vibration_mechanism',
      P: 'create:precision_mechanism',
      S: '#forge:tools/saw',
      H: '#forge:tools/hammer',
      D: '#forge:tools/screwdriver',
      R: '#forge:tools/crowbar',
    }).damageIngredient('#forge:tools/hammer', '1')
      .damageIngredient('#forge:tools/saw', '1')
      .damageIngredient('#forge:tools/screwdriver', '1')
      .damageIngredient('#forge:tools/crowbar', '1')
      //Pumpjack Crank
      event.shaped('tfmg:pumpjack_crank', [
        'LRL',
        ''
      ],{
        A: ''
      })

})
