MMEvents.createProcesses(e => {
    //Steel
    e.create('mm:recipe/ebf/steel')
    .structureId('mm:ebf_structure')
    .ticks(600)
    .input({
        type: 'mm:input/consume',
        ingredient: {
            type: 'mm:item',
            tag: 'forge:ingots/iron',
            count: 4
        }
    })
    .input({
        type: 'mm:input/consume',
        ingredient: {
            type: 'mm:item',
            tag: 'forge:ingots/manganese',
            count: 1
        }
    })
    .input({
        type: "mm:input/consume",
        ingredient: {
            type: 'mm:energy',
            amount: 4000
        }
    })
    .output({
        type: 'mm:output/simple',
        ingredient: {
            type: 'mm:item',
            tag: 'forge:ingots/steel',
            count: 4
        }
    })
})