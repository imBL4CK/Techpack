ServerEvents.recipes(e => {
    let id = ['ars_nouveau:imbuement/']
    //Earth Essence
    e.recipes.ars_nouveau.imbuement(
        ['ars_nouveau:source_gem'],
        'ars_nouveau:earth_essence',
        2000,
        ['createaddition:biomass_pellet','thermal:basalz_rod','eidolon:merammer_root']
    ).id(id + 'earth_essence')
    //Water Essence
    e.recipes.ars_nouveau.imbuement(
        ['ars_nouveau:source_gem'],
        'ars_nouveau:water_essence',
        2000,
        ['minecraft:water_bucket','thermal:blizz_rod','minecraft:prismarine_shard']
    ).id(id + 'water_essence')
    //Air Essence
    e.recipes.ars_nouveau.imbuement(
        ['ars_nouveau:source_gem'],
        'ars_nouveau:air_essence',
        2000,
        ['thermal:blitz_rod', 'ars_nouveau:wilden_wing', 'forbidden_arcanus:golden_feather']
    ).id(id + 'air_essence')

    const recipes = [
        {
        //Fire Essence
        input: 'ars_nouveau:source_gem',
        output: 'ars_nouveau:fire_essence',
        source: 1000,
        reagent: ['quark:soul_bead','minecraft:blaze_powder','minecraft:fire_charge']
        }
    ]
})