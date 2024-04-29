ServerEvents.recipes(event => {
    event.custom({
        type: "theurgy:incubation",
        incubation_time: 200,
        mercury: {
          item: "theurgy:mercury_shard"
        },
        result: {
          count: 1,
          item: "kubejs:copper_reagent"
        },
        salt: {
          item: "kubejs:empty_alchemy_jar"
        },
        sulfur: {
            item: "theurgy:alchemical_sulfur_copper"
        }
    }),
    event.custom({
        type: "theurgy:incubation",
        incubation_time: 200,
        mercury: {
          item: "theurgy:mercury_shard"
        },
        result: {
          count: 1,
          item: "kubejs:amethyst_reagent"
        },
        salt: {
          item: "kubejs:empty_alchemy_jar"
        },
        sulfur: {
            item: "theurgy:alchemical_sulfur_amethyst"
        }
    }),
    event.custom({
        type: "theurgy:incubation",
        incubation_time: 200,
        mercury: {
          item: "theurgy:mercury_shard"
        },
        result: {
          count: 1,
          item: "kubejs:ferrous_pewter_reagent"
        },
        salt: {
          item: "kubejs:empty_alchemy_jar"
        },
        sulfur: {
            item: "kubejs:ferrous_pewter_ingot"
        }
    }),
    event.custom({
        type: "theurgy:incubation",
        incubation_time: 200,
        mercury: {
          item: "theurgy:mercury_shard"
        },
        result: {
          count: 1,
          item: "kubejs:deorum_reagent"
        },
        salt: {
          item: "kubejs:empty_alchemy_jar"
        },
        sulfur: {
            tag: "forge:ingots/deorum"
        }
    })
 })