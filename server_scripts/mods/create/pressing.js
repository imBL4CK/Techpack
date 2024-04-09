ServerEvents.recipes(event =>{
    const id_prefix = 'techpack:expert/create/pressing';
    //Wooden Board
    event.recipes.create.pressing('#forge:plates/wooden',['#minecraft:planks'])
    //Red Alloy Plate
    event.recipes.create.pressing('#forge:plates/red_alloy',['kubejs:red_alloy_ingot'])
    //Ferrous Pewter Plate
    event.recipes.create.pressing('#forge:plates/ferrous_pewter',['kubejs:ferrous_pewter_ingot'])
})