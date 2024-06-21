//reference the classes used for the recipe
let MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
let ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')

//add the recipes manually
MysteriousItemConversionCategory.RECIPES.add(ConversionRecipe.create('create:chromatic_compound', 'create:shadow_steel'))
MysteriousItemConversionCategory.RECIPES.add(ConversionRecipe.create('create:chromatic_compound', 'create:refined_radiance'))