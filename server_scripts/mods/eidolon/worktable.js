ServerEvents.recipes(event =>{
    const id_prefix = 'techpack:expert/eidolon/worktable';
    event.custom({
        type: "eidolon:worktable",
        pattern: [
            "RKG",
            "SAS",
            "WBW"
        ],
        reagents: "flel",
        key: {
            W: {item: "kubejs:wooden_board"},
            B: {item: "eidolon:worktable"},
            S: {item: "minecraft:bookshelf"},
            A: {item: "forbidden_arcanus:arcane_crystal"},
            K: {item: "minecraft:book"},
            R: {item: "forbidden_arcanus:ender_pearl_fragment"},
            G: {item: "ars_nouveau:source_gem"},
            l: {item: "kubejs:empty_arcane_runic_slate"},
            e: {item: "ars_nouveau:source_gem"},
            f: {item: "eidolon:magic_ink"}
        },
        result:{ item: 
            "eidolon:research_table"
        },
        id: 'eidolon:research_table'
    })
    event.custom({
        type: "eidolon:worktable",
        pattern: [
            "P P",
            "IGI",
            "PIP"
        ],
        reagents: " ssa",
        key: {
            P: {tag: "forge:plates/pewter"},
            G: {item: "eidolon:soul_shard"},
            I: {item: "eidolon:pewter_inlay"},
            s: {item: "ars_nouveau:source_gem"},
            a: {tag: 'forge:dusts/arcane_crystal'}
        },
        result:{ item: 
            "eidolon:crucible"
        },
        id: 'eidolon:crucible'
    })
})