ServerEvents.recipes(event =>{
    let id = 'techpack:expert/eidolon/crucible';
    //Empty Arcane Runic Slate
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {item: "minecraft:obsidian"},
                ],
            },
            {items:[
                {item: "forbidden_arcanus:rune"},
                ],
                stirs: 1
            },
            {items:[
                {item: "forbidden_arcanus:mundabitur_dust"},
                ],
                stirs: 2
            },
        ],
        result:{
            item: "kubejs:empty_arcane_runic_slate"
        },
        id: 'kubejs:empty_arcane_runic_slate'
    })
    //Mundabitur Dust
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {tag: "forge:dusts/arcane_crystal"}
                ],
            }, 
            {items:[
                {tag: "forge:dusts/redstone"},
                {item: "minecraft:blaze_powder"}
                ],
                stirs: 1
            },
            {items:[
                {item: "minecraft:bone_meal"},
                {item: "minecraft:phantom_membrane"},
                {tag: "forge:gunpowder"}
                ],
                stirs: 1
            },
        ],
        result: {
            item: "forbidden_arcanus:mundabitur_dust",
            count: 4
        },
        id: 'forbidden_arcanus:mundabitur_dust'
    })
    //Deorum Dust
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {tag: "forge:dusts/gold"}
                ],
            }, 
            {items:[
                {item: "minecraft:charcoal"},
                {item: "minecraft:charcoal"}
                ],
                stirs: 1
            }, 
            {items:[
                {tag: "forge:dusts/arcane_crystal"},
                {tag: "forge:dusts/arcane_crystal"}
                ],
                stirs: 1
            }, 
            {items:[
                {tag: "forge:dusts/mundabitur"},
                {tag: "forge:dusts/mundabitur"}
                ],
                stirs: 1
            },
        ],
        result: {
            item: "kubejs:deorum_dust",
            count: 1
        },
        id: 'forbidden_arcanus:deorum_dust'
    })
    //Golden Sacrificial Bowl
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {item: "occultism:sacrificial_bowl"},
                ],
            },
            {items:[
                {tag: "forge:dusts/gold"},
                ],
                stirs: 1
            }
        ],
        result:{
            item: "occultism:golden_sacrificial_bowl"
        },
        id: 'occultism:golden_sacrificial_bowl'
    })
    //Aluminum Reagent
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {tag: "forge:ingots/aluminum"},
                {tag: "forge:ingots/aluminum"},
                {tag: "forge:ingots/aluminum"}
                ],
            },
            {items:[
                {item: "kubejs:empty_alchemy_jar"},
                ],
                stirs: 1
            }
        ],
        result:{
            item: "kubejs:aluminum_reagent"
        },
    })
    //Copper Reagent
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {tag: "forge:ingots/copper"},
                {tag: "forge:ingots/copper"},
                {tag: "forge:ingots/copper"}
                ],
            },
            {items:[
                {item: "kubejs:empty_alchemy_jar"},
                ],
                stirs: 1
            }
        ],
        result:{
            item: "kubejs:copper_reagent"
        },
    })
    //Aluminum Brass Reagent
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {item: "kubejs:aluminum_reagent"},
                {item: "kubejs:aluminum_reagent"},
                {item: "kubejs:aluminum_reagent"}
                ],
            },
            {items:[
                {item: "kubejs:copper_reagent"}
                ],
                stirs: 1
            }
        ],
        result:{
            item: "kubejs:aluminum_brass_reagent"
        },
    })
    //Arcanite alloy Reagent
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {item: "kubejs:aluminum_brass_reagent"},
                {item: "kubejs:ferrous_pewter_reagent"},
                {item: "kubejs:deorum_reagent"},
                {item: "kubejs:amethyst_reagent"}
                ],
            }
        ],
        result:{
            item: "kubejs:arcanite_alloy_reagent"
        },
    })
})