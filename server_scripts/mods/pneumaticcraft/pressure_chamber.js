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
    //Charge Motor
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
            tag: "forge:ingots/steel",
            },
            {
            tag: "forge:plates/tin"
            },
            {
            item: "railcraft:charge_coil"
            },
            {
            item: "railcraft:charge_terminal"
            }  
        ],
        pressure: 1,
        results: [
            {
            item: "railcraft:charge_motor",
            count: 2
            }
    ]
    })
    //Capacitor
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
            tag: "forge:plates/copper",
            },
            {
            tag: "forge:plates/zinc"
            },
            {
            item: "minecraft:redstone_torch"
            }   
        ],
        pressure: 1,
        results: [
            {
            item: "createaddition:capacitor",
            count: 1
            }
        ]
        })
})