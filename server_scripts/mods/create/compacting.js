ServerEvents.recipes(event => {
    event.recipes.create.compacting('thermal:rubber', [Fluid.of('minecraft:water', 25), Fluid.of('thermal:latex', 250)])
    event.recipes.create.compacting('eidolon:pewter_blend', ['#forge:ingots/lead', '#forge:ingots/iron'])
    event.recipes.create.compacting('tfmg:fireproof_brick', ['2x #forge:ingots/pewter', '2x tfmg:fireclay_ball'])
})