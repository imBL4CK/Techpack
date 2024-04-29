ServerEvents.recipes(event =>{
    //Charge Coil
    event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
        {
        type: "pneumaticcraft:stacked_item",
        tag: "forge:wires/copper",
        count: 3
        },
        {
        type: "pneumaticcraft:stacked_item",
        tag: "forge:plates/iron",
        count: 3
        }
    ],
    pressure: 1,
    results: [
        {
        item: "railcraft:charge_coil"
        }
    ]
    })
    //Engine Piston
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
            tag: "forge:ingots/andesite_alloy",
            },
            {
            tag: "forge:rods/iron"
            },
            {
            tag: "forge:nuggets/zinc"
            }   
        ],
        pressure: 1,
        results: [
            {
            item: "createdieselgenerators:engine_piston",
            count: 3
            }
        ]
        })
})