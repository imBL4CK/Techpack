ServerEvents.recipes(event =>{
    let id = 'techpack:expert/create/mechanical_crafting'

    event.recipes.create.mechanical_crafting(
        'id', [
            'AAA',
            'AAA',
            'AAA'
        ],{
            A: 'a'
        }
    )
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
})