ServerEvents.recipes(e => {
    let recipeId = ['ars_nouveau:enchanting_apparatus/']
    const recipes = [
        {
            inputs: ['#forge:gears/dark_steel',
                    'enderio:dark_steel_bars',
                    '#forge:gears/dark_steel',
                    'enderio:dark_steel_bars',
                    '#forge:gears/dark_steel',
                    '#forge:plastic',
                    '#forge:gears/dark_steel', 
                    '#forge:dusts/grains_of_infinity'
            ],
            reagent: 'kubejs:primitive_machine_casing',
            outputs: 'enderio:void_chassis',
            source: 1000,
            keepNBT: false,
            id: (recipeId + 'void_chassis')
        },
        {
            inputs: ['#forge:gears/tin',
            '#forge:gears/tin',
            '#forge:ingots/manasteel',
            '#forge:plates/stainless_steel',
            '#forge:plates/stainless_steel',
            '#forge:plastic',
            '#forge:dusts/mundabitur',
            'thermal:redstone_servo'
        ],
            reagent: 'thermal:obsidian_glass',
            outputs: 'thermal:machine_frame',
            source: 2000,
            keepNBT: false,
            id: (recipeId + 'machine_frame')
        }
    ]
    recipes.forEach((recipe) => {
        e.recipes.ars_nouveau.enchanting_apparatus(recipe.inputs, recipe.reagent, recipe.outputs, recipe.source, recipe.keepNBT).id(recipe.id)
    });
})