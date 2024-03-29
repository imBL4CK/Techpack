ServerEvents.recipes(event =>{
let remove_recipe_recipeid =
//minecraft
        [
            'minecraft:crafting_table',
            'railcraft:water_tank_siding',
            'minecraft:chest',
            'minecraft:furnace',
            'tfmg:crafting/screwdriver',
            'create:craftng/kinetics/cogwheel',
            'create:crafting/kinetics/shaft',
            'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',
            'epicsamurai:steel_ingot_create_compat',
            'create:crafting/kinetics/cogwheel',
            'create:crafting/kinetics/large_cogwheel',
            'create:crafting/kinetics/large_cogwheel_from_little',
            'create:crafting/kinetics/hand_crank',
            'create:crafting/kinetics/water_wheel',
            'create:crafting/kinetics/large_water_wheel',
            'minecraft:smithing_table',
            'create:crafting/kinetics/deployer',
            'create:crafting/kinetics/mechanical_saw',
            'create:crafting/kinetics/mechanical_press',
            'create:crafting/kinetics/mechanical_drill',
            'create:crafting/kinetics/encased_fan',
            'create:crafting/kinetics/mechanical_mixer',
            'thermal:saw_blade',
            'ad_astra:recipes/hammer',
            'ad_astra:hammering/iron_plate',  
            'ad_astra:hammering/steel_plate',
            'create:crafting/kinetics/millstone',
            'minecraft:bucket', 
            'create:crafting/kinetics/wrench',
            'ad_astra:recipes/iron_rod',
            'minecraft:iron_bars',
            'create:crafting/kinetics/empty_blaze_burner',
            'create:pressing/steel_ingot',
            'railcraft:rolling/steel_plate',
            'wizards_reborn:shaped/arcane_workbench',
            'tfmg:sequenced_assembly/steel_mechanism',
            'eidolon:worktable',
            'thermal:rf_coil',
            'tfmg:crafting/steel_tank',
            'eidolon:research_table',
            'forbidden_arcanus:mundabitur_dust',
            'eidolon:crucible',
            'tfmg:mixing/cast_iron_ingot',
            'create:crafting/logistics/andesite_funnel',
            'create:crafting/kinetics/mechanical_harvester',
            'create:crafting/kinetics/mechanical_plough',
            'create:crafting/kinetics/contraption_controls',
            'create:crafting/kinetics/portable_storage_interface',
            'create:crafting/kinetics/chute',
            'railcraft:brass_ingot_crafted_with_ingots',
            'create:mixing/brass_ingot',
            'createdieselgenerators:crafting/huge_diesel_engine',
            'createdieselgenerators:crafting/large_diesel_engine',
            'createdieselgenerators:crafting/diesel_engine',
            'create:crafting/materials/electron_tube',
            'create_things_and_misc:vibration_mecanism_craft',
            'thermal:redstone_servo',
            'thermal:device_tree_extractor',
            'thermal:rubber_from_dandelion',
            'thermal:rubber_from_vine',
            'create:crafting/kinetics/fluid_tank',
            'create:crafting/kinetics/mechanical_pump',
            'create:crafting/kinetics/fluid_pipe',
            'create:crafting/kinetics/belt_connector',
            'create:deploying/cogwheel',
            'create:deploying/large_cogwheel',
            'create:crafting/materials/rose_quartz',
            'create:sequenced_assembly/precision_mechanism',
            'tfmg:item_application/coke_oven',
            'tfmg:item_application/coke_oven_using_deployer',
            'eidolon:pewter_blend',
            'eidolon:smelt_pewter_blend',
            'eidolon:blast_pewter_blend',
            'tfmg:smelting/fireclay_brick',
            'create:crafting/kinetics/super_glue',
            'tfmg:crafting/blast_furnace_output',
            'createdieselgenerators:crafting/basin_lid',
            'minecraft:clock',
            'createaddition:crafting/rolling_mill',
            'minecraft:map',
            'tfmg:mechanical_crafting/surface_scanner',
            'railcraft:bronze_ingot_crafted_with_ingots'
        ]
    remove_recipe_recipeid.forEach(recipeID => {
        event.remove({ id: recipeID })
    })
})
