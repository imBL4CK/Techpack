StartupEvents.registry('item', e =>{
    let CustomMaterials = [
        "mica",
        "stainless_steel",
        "tungsten",
        "tungstensteel",
        "",
    ]
    CustomMaterials.forEach((cRegistry) => {
        //Ingots
        e.create(cRegistry +'_ingot').texture('kubejs:item/library/'+cRegistry+'_ingot')
//Plates
e.create(cRegistry +'_plate').texture('kubejs:item/library/'+cRegistry+'_plate')
//Gears
e.create(CRegistry +'gear').texture('kubejs:item/library/' +cRegistry+ 'gear')
    }
})