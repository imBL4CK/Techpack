ServerEvents.recipes(event =>{
    const id = 'techpack:expert/create/mechanical_crafting'

   /*
    event.recipes.create.mechanical_crafting(
        'id', [
            'AAA',
            'AAA',
            'AAA'
        ],{
            A: 'a'
        })
   */

    //Surface Scanner
    event.recipes.create.mechanical_crafting(
     'tfmg:surface_scanner',[
        'SCS',
        'PAP',
        'MFI'
     ], {
        S: '#forge:plates/steel',
        C: 'minecraft:compass',
        P: '#forge:plates/copper',
        M: 'tfmg:steel_mechanism',
        A: 'tfmg:steel_casing',
        F: 'create:shaft',
        I: 'kubejs:primitive_circuit'
     })
     //Spark Plug
     event.recipes.create.mechanical_crafting(
         'tfmg:spark_plug', [
             'A',
             'A'
         ],{
             A: 'a',
             P: '#forgeplates/aluminium'
        })
    //Steel Distillation Controller
    event.recipes.create.mechanical_crafting(
     'tfmg:steel_distillation_controller',[
        'SPS',
        'MDE',
        'LHL'
     ], {
        S: '#forge:plates/steel',
        P: 'tfmg:industrial_pipe',
        M: 'tfmg:steel_mechanism',
        D: 'create:display_board',
        E: 'create:precision_mechanism',
        H: 'tfmg:heavy_machinery_casing',
        L: 'kubejs:large_steel_plate'
     })
    //Diesel Engine
    event.recipes.create.mechanical_crafting(
     'tfmg:diesel_engine',[
        ' S ',
        ' A ',
        'AMA',
        'THT',
        'FKF',
        'SGS'
     ], {
        S: 'kubejs:large_steel_plate',
        A: '#forge:plates/aluminium',
        M: 'kubejs:engine_mechanism',
        T: 'tfmg:steel_mechanism',
        H: 'tfmg:heavy_machinery_casing',
        G: 'kubejs:large_steel_gear',
        K: 'tfmg:steel_fluid_tank',
        F: '#forge:plates/ferrous_pewter'
     })
     //gasoline Engine
     event.recipes.create.mechanical_crafting(
      'tfmg:gasoline_engine',[
         'SGA  ',
         'SEMFS',
         'SKP  '
      ], {
         S: 'kubejs:large_steel_plate',
         E: 'tfmg:engine_base',
         A: '#forge:plates/aluminium',
         M: 'kubejs:engine_mechanism',
         G: 'kubejs:large_steel_gear',
         K: 'tfmg:steel_fluid_tank',
         F: '#forge:plates/ferrous_pewter',
         P: 'createdieselgenerators:engine_piston'
      })
     //LPG Engine
     event.recipes.create.mechanical_crafting(
      'tfmg:lpg_engine',[
         'SGP  ',
         'SEMFL',
         'SKP  '
      ], {
         S: 'kubejs:large_steel_plate',
         E: 'tfmg:engine_base',
         M: 'kubejs:engine_mechanism',
         G: 'kubejs:large_steel_gear',
         K: 'tfmg:steel_fluid_tank',
         F: '#forge:plates/ferrous_pewter',
         L: 'kubejs:large_aluminium_plate',
         P: 'createdieselgenerators:engine_piston'
      })
      //Turbine Engine
      event.recipes.create.mechanical_crafting(
         'tfmg:turbine_engine',[
            'SPA  ',
            'SEMKA',
            'SPC  '
         ], {
            S: 'kubejs:large_steel_plate',
            E: 'tfmg:engine_base',
            A: '#forge:plates/aluminium',
            M: 'kubejs:engine_mechanism',
            K: 'tfmg:steel_fluid_tank',
            P: 'createdieselgenerators:engine_piston',
            C: 'tfmg:engine_chamber'
      })
      //Radial Engine   
      event.recipes.create.mechanical_crafting(
         'tfmg:radial_engine',[
           '  P  ',
           ' PLP ',
           'PIHMP',
           ' PSP ',
           '  P  '
         ], {
            P: 'tfmg:engine_chamber',
            S: 'create:shaft',
            M: 'kubejs:engine_mechanism',
            H: 'tfmg:heavy_machinery_casing',
            I: 'tfmg:steel_pipe',
            L: 'kubejs:large_steel_plate'
      })
      //Large Radial Engine   
      event.recipes.create.mechanical_crafting(
         'tfmg:large_radial_engine',[
           ' PLP ',
           'PLILP',
           'PEHEP',
           'PLSLP',
           ' PLP '
         ], {
            P: 'tfmg:engine_chamber',
            S: 'create:shaft',
            E: 'kubejs:engine_mechanism',
            H: 'tfmg:heavy_machinery_casing',
            I: 'tfmg:steel_pipe',
            L: 'kubejs:large_steel_plate'
         })
      //Pumpjack Crank
      event.recipes.create.mechanical_crafting(
         'tfmg:pumpjack_crank',[
           'SOS',
           'RHR',
           'MLM'
         ], {
            R: 'tfmg:rebar',
            H: 'tfmg:heavy_machinery_casing',
            S: '#forge:plates/steel',
            O: 'quark:rope',
            M: 'tfmg:steel_mechanism',
            L: 'kubejs:large_steel_plate'
         })
      //Pumpjack Base
      event.recipes.create.mechanical_crafting(
         'tfmg:pumpjack_base',[
           'LRS',
           'MHM',
           'SIL'
         ], {
            R: 'quark:rope',
            H: 'tfmg:heavy_machinery_casing',
            S: '#forge:plates/steel',
            M: 'tfmg:steel_mechanism',
            L: 'kubejs:large_steel_plate',
            I: 'tfmg:industrial_pipe'
         })  
      //Pumpjack Base
      event.recipes.create.mechanical_crafting(
         'tfmg:steel_distillation_output',[
           'LPS',
           'PFP',
           'SPL'
         ], {
            S: '#forge:plates/steel',
            L: 'kubejs:large_steel_plate',
            P: 'tfmg:steel_pipe',
            F: 'tfmg:steel_fluid_tank'
         })          
})