ServerEvents.recipes(event =>{
    const id = 'techpack:expert/create/mechanical_crafting'

    // event.recipes.create.mechanical_crafting(
    //     'id', [
    //         'AAA',
    //         'AAA',
    //         'AAA'
    //     ],{
    //         A: 'a'
    //    })

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
        'H'
     ], {
        S: '#forge:plates/steel',
        P: 'tfmg:industrial_pipe',
        M: 'tfmg:steel_mechanism',
        D: 'create:display_board',
        E: 'create:precision_mechanism',
        H: 'tfmg:heavy_machinery_casing',
     })
    event.recipes.create.mechanical_crafting(
     'tfmg:diesel_engine',[
        ' S ',
        ' A ',
        'AMA',
        'THT',
        'FKF',
        'SGS'
     ], {
        S: 'kubejs:steel_large_plating',
        A: '#forge:plates/aluminium',
        M: 'kubejs:engine_mechanism',
        T: 'tfmg:steel_mechanism',
        H: 'tfmg:heavy_machinery_casing',
        G: 'kubejs:large_steel_gear',
        K: 'tfmg:steel_fluid_tank',
        F: '#forge:plates/ferrous_pewter'
     })
})