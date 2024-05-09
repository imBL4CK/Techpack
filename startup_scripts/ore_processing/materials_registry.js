StartupEvents.registry('item', e =>{
    let CustomMaterials = [
        "mica",
        "stainless_steel",
        "tungsten",
        "tungstensteel",
        "",
    ]
    CustomMaterials.forEach{
        e.create()
    }
})