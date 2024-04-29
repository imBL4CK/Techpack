ServerEvents.recipes(event => {
    event.recipes.create.compacting('thermal:rubber', [Fluid.of('minecraft:water', 25), Fluid.of('thermal:latex', 250)])
    event.recipes.create.compacting('eidolon:pewter_blend', ['#forge:ingots/lead', '#forge:ingots/iron'])
    event.recipes.create.compacting('tfmg:fireproof_brick', ['2x #forge:ingots/pewter', '2x tfmg:fireclay_ball'])
    event.recipes.create.compacting('create_new_age:blank_circuit', ['#forge:plates/iron', 'minecraft:redstone', '#forge:dusts/quartz']).heated()
    //Molten Copper
    event.recipes.create.compacting(
        [Fluid.of('embers:molten_copper', 90)], ['#forge:ingots/copper']
    ).heated()
    //Disitabilized Redstone
    event.recipes.create.compacting(
        [Fluid.of('thermal:redstone', 90)], ['#forge:dusts/redstone']
    ).heated()
})