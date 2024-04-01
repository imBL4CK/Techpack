ServerEvents.recipes(event =>{
    //Copper
    event.recipes.create.milling(
        ['#forge:dusts/copper'], ['#forge:ores/copper']
    );
    event.recipes.create.milling(
        ['#forge:dusts/copper'], ['#forge:raw_ores/copper']
    );
    //Iron
    event.recipes.create.milling(
        ['#forge:dusts/iron'], ['#forge:ores/iron']
    );
    event.recipes.create.milling(
        ['#forge:dusts/iron'], ['#forge:raw_ores/iron']
    );
    //Nickel
    event.recipes.create.milling(
        ['#forge:dusts/nickel'], ['#forge:ores/nickel']
    );
    event.recipes.create.milling(
        ['#forge:dusts/nickel'], ['#forge:raw_ores/nickel']
    )
})