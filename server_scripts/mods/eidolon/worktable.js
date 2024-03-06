ServerEvents.recipes(event =>{
    const id_prefix = 'techpack:expert/eidolon/worktable';
    //Research Table
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
        id: 'eidolon_worktable:eidolon/research_table'
    })
    //Crucible
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
        id: 'eidolon_worktable:eidolon/crucible'
    })
    //Crude Scythe
    event.custom({
        type: "eidolon:worktable",
        pattern: [
            "FFI",
            "USF",
            "SGF"
        ],
        reagents: "sroi",
        key: {
            F: {tag: "forge:plates/ferrous_pewter"},
            G: {item: "eidolon:soul_shard"},
            S: {item: "minecraft:stick"},
            I: {item: "eidolon:pewter_inlay"},
            U: {item: "ars_nouveau:source_gem"},
            i: {item: "eidolon:pewter_inlay"},
            r: {item: "kubejs:empty_arcane_runic_slate"},
            a: {tag: 'forge:dusts/arcane_crystal'},
            o: {item: "malum:processed_soulstone"},
            s: {item: "forbidden_arcanus:soul"}
        },
        result:{ item: 
            "malum:crude_scythe"
        },
        id: 'eidolon_worktable:malum/crude_scythe'
    })
})