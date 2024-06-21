ServerEvents.recipes(e => {
    let recipeId = 'thermal:induction/';

    const recipes = [
        {
            input: Item.of('#forge:plastic', 3),
            output: 'kubejs:hdpe_sheet',
            energy: 1000,
            id: (recipeId + 'hdpe_sheet')
        }
    ]
    recipes.forEach((recipe) => {
        e.recipes.thermal.smelter(recipe.output, recipe.input).energy(recipe.energy).id(recipe.id)
    });
})