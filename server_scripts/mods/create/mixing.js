ServerEvents.recipes(event => {
    //Brass Ingot
    event.recipes.create.mixing(
        ['#forge:ingots/brass'],
        ['2x #forge:dusts/copper', '2x #forge:dusts/zinc']
    ).heated()
    //Cast Iron Ingot
    event.recipes.create.mixing(
        ['#forge:ingots/cast_iron'],
        ['4x #forge:dusts/coal', '2x #forge:dusts/iron']
    ).heated()
    // (Fluid) Thermal Disitabilized Redstone
    event.recipes.create.mixing(
        [Fluid.of('thermal:redstone', 500)], ['4x #forge:ingots/red_alloy']
    ).heated()
    //Red Alloy Ingot
    event.recipes.create.mixing(
        ['#forge:ingots/red_alloy'],
        ['#forge:dusts/copper', '4x minecraft:redstone']
    ).heated()
    event.recipes.create.mixing(
        ['#forge:ingots/red_alloy'],
        ['#forge:dusts/copper', Fluid.of('thermal:redstone', 125)]
    ).heated()
    //Rose Quartz
    event.recipes.create.mixing(
        ['create:rose_quartz'],
        ['#forge:gems/quartz', Fluid.of('thermal:redstone', 250)]
    ).heated()
    //Bronze Blend
    event.recipes.create.mixing(
        ['create:rose_quartz'],
        ['#forge:gems/quartz', Fluid.of('thermal:redstone', 250)]
    ).heated()
    //Invar Blend
    event.recipes.create.mixing(
        [ '3x #forge:dusts/invar'],
        [ '2x #forge:dusts/iron', '#forge:dusts/nickel']
    )
})