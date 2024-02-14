ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        ['#forge:ingots/brass'],
        ['2x #forge:dusts/copper', '2x #forge:dusts/zinc']
    ).heated()
    event.recipes.create.mixing(
        ['#forge:ingots/cast_iron'],
        ['4x #forge:dusts/coal', '2x #forge:dusts/iron']
    ).heated()
    event.recipes.create.mixing(
        [Fluid.of('thermal:redstone', 500)], ['4x #forge:ingots/red_alloy']
    ).heated()
    event.recipes.create.mixing(
        ['#forge:ingots/red_alloy'],
        ['#forge:dusts/copper', '4x minecraft:redstone']
    ).heated()
    event.recipes.create.mixing(
        ['#forge:ingots/red_alloy'],
        ['#forge:dusts/copper', Fluid.of('thermal:redstone', 125)]
    ).heated()
    event.recipes.create.mixing(
        ['create:rose_quartz'],
        ['#forge:gems/quartz', Fluid.of('thermal:redstone', 250)]
    ).heated()
})