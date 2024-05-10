StartupEvents.registry('item', e =>{
    var CustomMaterials = [
        "mica",
        "stainless_steel",
        "tungsten",
        "tungstensteel",
        "red_alloy",
        "blue_alloy",
        "aluminum_brass",
        "draconium",
        "awakened_draconium",
        "manganese",
        "arcanite",
        "orichalcum",
        "compressed_steel",
        "crystaline_pink_slime",
        "vivid_alloy",
        "energetic_silver",
        "crystalline_alloy",
        "crude_steel",
        "ferrous_pewter",
        "dark_steel",
        "osgloglas"
    ]
    CustomMaterials.forEach((cRegistry) => {
    //Ingots
    e.create(cRegistry+'_ingot').texture('kubejs:item/library/'+cRegistry+'_ingot')
    //Nugget
    e.create(cRegistry+'_nugget').texture('kubejs:item/library/'+cRegistry+'_nugget')
    //Plates
    e.create(cRegistry+'_plate').texture('kubejs:item/library/'+cRegistry+'_plate')
    //Gears
    e.create(cRegistry+'_gear').texture('kubejs:item/library/'+cRegistry+ '_gear')
    //Wire
    e.create(cRegistry+'_wire').texture('kubejs:item/library/'+cRegistry+ '_wire')
    })
})