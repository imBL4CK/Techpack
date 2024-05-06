ServerEvents.recipes(event => {
    let id = ['ars_nouveau:imbuement/']
    let recipes = [event.recipes.ars_nouveau.imbuement]

    //Fire Essence
    recipes+(
        ['ars_nouveau:source_gem'],
        'ars_nouveau:fire_essence',
        2000,
        ['quark:soul_bead','minecraft:blaze_powder','minecraft:fire_charge']
    ).id(id + 'fire_essence')

    //Earth Essence
    recipes+(
        ['ars_nouveau:source_gem'],
        'ars_nouveau:earth_essence',
        2000,
        ['quark:soul_bead','thermal:basalz_rod','eidolon:merammer_root']
    ).id(id + 'fire_essence')
})