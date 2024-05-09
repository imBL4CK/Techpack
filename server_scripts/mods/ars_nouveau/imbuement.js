ServerEvents.recipes(event => {
    let id = ['ars_nouveau:imbuement/']

    //Fire Essence
    event.recipes.ars_nouveau.imbuement(
        ['ars_nouveau:source_gem'],
        'ars_nouveau:fire_essence',
        2000,
        ['quark:soul_bead','minecraft:blaze_powder','minecraft:fire_charge']
    ).id(id + 'fire_essence')
    //Earth Essence
    event.recipes.ars_nouveau.imbuement(
        ['ars_nouveau:source_gem'],
        'ars_nouveau:earth_essence',
        2000,
        ['createaddition:biomass_pellet','thermal:basalz_rod','eidolon:merammer_root']
    ).id(id + 'earth_essence')
    //Water Essence
    event.recipes.ars_nouveau.imbuement(
        ['ars_nouveau:source_gem'],
        'ars_nouveau:water_essence',
        2000,
        ['minecraft:water_bucket','thermal:blizz_rod','minecraft:prismarine_shard']
    ).id(id + 'water_essence')
    //Air Essence
    event.recipes.ars_nouveau.imbuement(
        ['ars_nouveau:source_gem'],
        'ars_nouveau:air_essence',
        2000,
        ['thermal:blitz_rod', 'ars_nouveau:wilden_wing', 'forbidden_arcanus:golden_feather']
    ).id(id + 'air_essence')
})