ServerEvents.recipes(event =>{
    event.custom({
        type: "tfmg:casting",
        ingredient:
          {
            fluid: "embers:molten_bronze",
            amount: 1
          },
        processingTime: 300,
        result: 
          {
            item: "thermal:bronze_ingot",
            count: 1
          }
    })
})