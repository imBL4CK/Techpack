StartupEvents.registry('fluid', event => { 
  //Ice Coolant
  event.create('ice_coolant')
    .displayName('Ice Coolant')
    .stillTexture('kubejs:block/ice_coolant_still') 
    .flowingTexture('kubejs:block/ice_coolant_flow')
  //Molten Red Alloy
  event.create('molten_red_alloy')
    .displayName('Molten Red Alloy')
    .stillTexture('kubejs:block/molten_red_alloy_still') 
    .flowingTexture('kubejs:block/molten_red_alloy_flow')
    .density(4000)
    .viscosity(2000)
    .bucketItem.texture('kubejs:item/molten_red_alloy_bucket')
  //Molten Blue Alloy
  event.create('molten_blue_alloy')
  .displayName('Molten Blue Alloy')
  .stillTexture('kubejs:block/molten_blue_alloy_still') 
  .flowingTexture('kubejs:block/molten_blue_alloy_flow')
  .density(4000)
  .viscosity(2000)
  .bucketItem.texture('kubejs:item/molten_blue_alloy_bucket')
})
