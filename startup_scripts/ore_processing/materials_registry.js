StartupEvents.registry('item', e =>{
    let CustomMaterials = [
        "mica",
        "stainless_steel",
        "tungsten",
        "tungstensteel",
        "",
    ]
    CustomMaterials.forEach((cRegistry) => {
        e.create(cRegistry +'_ingot').texture('kubejs:item/library/'+cRegistry+'_ingot')
    }
})