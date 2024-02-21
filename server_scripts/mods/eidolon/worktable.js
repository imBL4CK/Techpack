ServerEvents.recipes(event =>{
    event.custom({
        type: "eidolon:worktable",
        patterm: [
            " K ",
            "SAS",
            "WBW"
        ],
        reagents: ,
        key: {
            W: {tag: "#forge:plates/wooden"},
            B: {item: "eidolon:worktable"},
            S: {item: "minecraft:bookshelf"},
            A: {item: "forbidden_arcanus:arcane_crystal"},
            K: {item: "minecraft:book"}

        }

    })
})
{
    "type": "eidolon:worktable",
    "pattern": [
      " S ",
      "sss",
      " s "
    ],
    "reagents": "u i ",
    "key": {
      "s": {
        "item": "minecraft:stone"
      },
      "S": {
        "item": "minecraft:smooth_stone"
      },
      "u": {
        "tag": "eidolon:patron_symbol"
      },
      "i": {
        "item": "eidolon:gold_inlay"
      }
    },
    "result": {
      "item": "eidolon:unholy_effigy"
    }
  }