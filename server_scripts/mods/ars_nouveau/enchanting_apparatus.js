ServerEvents.recipes(e => {
    let recipeId = ['ars_nouveau:enchanting_apparatus/']
    const recipes = [
        {
            inputs: [],
            reagent: '',
            outputs: '',
            source: '',
            keepNBT: false,
            id: (recipeId + '')
        }
    ]
    recipes.forEach((recipe) => {
        e.recipes.ars_nouveau.enchanting_apparatus(recipe.inputs, recipe.reagent, recipe.outputs, recipe.source, recipe.keepNBT).id(recipe.id)
    });
})