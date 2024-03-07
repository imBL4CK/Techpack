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
})