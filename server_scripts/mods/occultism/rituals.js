ServerEvents.recipes(event => {
event.recipes.occultism.ritual(
    'kubejs:dusk_world_crystal',
    [
        "occultism:spirit_attuned_gem",
        "eidolon:lesser_soul_gem",
        'eidolon:pewter_inlay',
        'eidolon:gold_inlay',
        'eidolon:zombie_heart',
        'eidolon:tattered_cloth',
        'forbidden_arcanus:mundabitur_dust',
        'forbidden_arcanus:arcane_crystal_dust',
    ],
    'ars_nouveau:source_gem',
    'occultism:summon_foliot'
).dummy('occultism:craft_miner_spirit').duration(20).id('occultism:rituals/dusk_world_gem')
})