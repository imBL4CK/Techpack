ServerEvents.recipes(event => {
    //Iron ore to Manganese
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_furnace", 200)
    .requireEnergy(1000)
    .requireItemTag('#forge:ores/iron')
    .produceItem(Item.of('#forge:ingots/iron', 2))
    .produceItem(Item.of('#forge:ingots/manganese')).chance(0.3)
    //Raw Iron to Manganese
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_furnace", 200)
    .requireEnergy(1000)
    .requireItemTag('#forge:raw_materials/iron')
    .produceItem(Item.of('#forge:ingots/iron', 2))
    .produceItem(Item.of('#forge:ingots/manganese')).chance(0.3)
  })
