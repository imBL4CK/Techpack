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
                    '#forge:dusts/grains_of_infinity'],
            reagent: 'kubejs:primitive_machine_casing',
            outputs: 'enderio:void_chassis',
            source: 1000,
            keepNBT: false,
            id: (recipeId + 'void_chassis')
        }
    ]
    recipes.forEach((recipe) => {
        e.recipes.ars_nouveau.enchanting_apparatus(recipe.inputs, recipe.reagent, recipe.outputs, recipe.source, recipe.keepNBT).id(recipe.id)
    });
})