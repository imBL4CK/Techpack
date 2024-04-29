ServerEvents.recipes(event => {
    //Primitive Circuit Board
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 600)
    .requireEnergy(20000)
    .requireItem('thermal:cured_rubber')
    .requireItem('ae2:charged_certus_quartz_crystal')
    .requireItem('create_new_age:copper_circuit')
    .requireItem('kubejs:primitive_io_component')
    .requireItemTag('#forge:wires/red_alloy', 2)
    .requireItemTag('#forge:wires/blue_alloy', 2)
    .produceItem('kubejs:primitive_circuit_board')

    //Primitive IO component
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(10000)
    .requireItem('thermal:cured_rubber')
    .requireItemTag('#forge:plates/ferrous_pewter',3)
    .requireItemTag('#forge:wires/red_alloy')
    .requireItemTag('#forge:wires/blue_alloy')
    .produceItem('kubejs:primitive_io_component')
  })