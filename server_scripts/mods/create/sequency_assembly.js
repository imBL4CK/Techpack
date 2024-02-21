ServerEvents.recipes(event => {
    event.recipes.create.sequenced_assembly([
        Item.of('create_things_and_misc:vibration_mechanism')
    ],'kubejs:red_alloy_plate', [
        event.recipes.create.deploying('create_things_and_misc:incomplete_vibration_mechanism', ['create_things_and_misc:incomplete_vibration_mechanism', 'minecraft:amethyst_shard']),
        event.recipes.create.filling('create_things_and_misc:incomplete_vibration_mechanism', ['create_things_and_misc:incomplete_vibration_mechanism', Fluid.of('thermal:redstone', 125)]),
        event.recipes.create.deploying('create_things_and_misc:incomplete_vibration_mechanism', ['create_things_and_misc:incomplete_vibration_mechanism', 'thermal:redstone_servo']),
        event.recipes.create.deploying('create_things_and_misc:incomplete_vibration_mechanism', ['create_things_and_misc:incomplete_vibration_mechanism', 'create:electron_tube']),
        event.recipes.create.pressing('create_things_and_misc:incomplete_vibration_mechanism', ['create_things_and_misc:incomplete_vibration_mechanism'])
    ]).transitionalItem('create_things_and_misc:incomplete_vibration_mechanism').loops(1)

    event.recipes.create.sequenced_assembly([
        Item.of('thermal:redstone_servo')
    ],'#forge:plates/iron', [
        event.recipes.create.deploying('#forge:plates/iron', ['#forge:plates/iron', 'thermal:cured_rubber']),
        event.recipes.create.filling('#forge:plates/iron', ['#forge:plates/iron', Fluid.of('thermal:redstone', 125)]),
        event.recipes.create.deploying('#forge:plates/iron', ['#forge:plates/iron', 'kubejs:makeshift_mechanism']),
        event.recipes.create.pressing('#forge:plates/iron', ['#forge:plates/iron'])
    ]).transitionalItem('#forge:plates/iron').loops(1)

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:makeshift_mechanism')
    ],'#forge:plates/wooden', [
        event.recipes.create.deploying('#forge:plates/wooden', ['#forge:plates/wooden', 'create:cogwheel']),
        event.recipes.create.deploying('#forge:plates/wooden', ['#forge:plates/wooden', 'create:andesite_alloy']),
        event.recipes.create.deploying('#forge:plates/wooden', ['#forge:plates/wooden', '#forge:tools/saw'])
    ]).transitionalItem('#forge:plates/wooden').loops(1)

    event.recipes.create.sequenced_assembly([
        Item.of('create:precision_mechanism')
    ],'#forge:plates/gold', [
        event.recipes.create.deploying('#forge:plates/gold', ['#forge:plates/gold', 'create:electron_tube']),
        event.recipes.create.deploying('#forge:plates/gold', ['#forge:plates/gold', 'thermal:redstone_servo']),
        event.recipes.create.deploying('#forge:plates/gold', ['#forge:plates/gold', 'tfmg:screw']),
        event.recipes.create.deploying('#forge:plates/gold', ['#forge:plates/gold', '#forge:tools/screwdriver'])
    ]).transitionalItem('#forge:plates/gold').loops(1)

    event.recipes.create.sequenced_assembly([
        Item.of('tfmg:coke_oven')
    ],'create:industrial_iron_block', [
        event.recipes.create.deploying('create:industrial_iron_block', ['create:industrial_iron_block', 'create:precision_mechanism']),
        event.recipes.create.deploying('create:industrial_iron_block', ['create:industrial_iron_block', 'thermal:cured_rubber']),
        event.recipes.create.deploying('create:industrial_iron_block', ['create:industrial_iron_block', 'tfmg:screw']),
        event.recipes.create.deploying('create:industrial_iron_block', ['create:industrial_iron_block', '#forge:tools/screwdriver']),
        event.recipes.create.pressing('create:industrial_iron_block', ['create:industrial_iron_block'])
    ]).transitionalItem('create:industrial_iron_block').loops(1)

    event.recipes.create.sequenced_assembly([
        Item.of('tfmg:steel_mechanism')
    ],'create:precision_mechanism', [
        event.recipes.create.deploying('create:precision_mechanism', ['create:precision_mechanism', 'thermal:rf_coil']),
        event.recipes.create.deploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:plates/steel']),
        event.recipes.create.deploying('create:precision_mechanism', ['create:precision_mechanism', 'thermal:redstone_servo']),
        event.recipes.create.deploying('create:precision_mechanism', ['create:precision_mechanism', 'tfmg:screw']),
        event.recipes.create.deploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:tools/screwdriver'])
    ]).transitionalItem('tfmg:unfinished_steel_mechanism').loops(1)
//Primitive Circuit
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:primitive_circuit')
    ],'kubejs:primitive_circuit_board', [
        event.recipes.create.deploying('kubejs:primitive_circuit_board', ['kubejs:primitive_circuit_board', '#forge:tools/screwdriver']),
        event.recipes.create.pressing('kubejs:primitive_circuit_board', ['kubejs:primitive_circuit_board']),
        event.recipes.create.filling('kubejs:primitive_circuit_board', ['kubejs:primitive_circuit_board', Fluid.of('tfmg:lubrication_oil', 125)]),
        event.recipes.create.pressing('kubejs:primitive_circuit_board', ['kubejs:primitive_circuit_board']),
        event.recipes.create.deploying('kubejs:primitive_circuit_board', ['kubejs:primitive_circuit_board', 'kubejs:primitive_io_component']),
        event.recipes.create.pressing('kubejs:primitive_circuit_board', ['kubejs:primitive_circuit_board'])
    ]).transitionalItem('kubejs:primitive_circuit_board').loops(2)
})