ServerEvents.recipes(event => {
    event.recipes.thermal.chiller(
    'kubejs:ferrous_pewter_ingot',
    [Fluid.of('kubejs:ice_coolant', 100), 'kubejs:hot_ferrous_pewter_ingot']
    )
 })