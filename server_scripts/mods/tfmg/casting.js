ServerEvents.recipes(event =>{
  event.custom({
  type: "tfmg:casting",
  ingredients: [
    {
      fluid: "embers:molten_bronze",
      amount: 1
    }
  ],
  processingTime: 300,
  results: [
    {
      count: 1,
      item: "thermal:bronze_ingot"
    }
  ,
    {
      count: 1,
      item: "thermal:bronze_block"
    }
  ]
})
})