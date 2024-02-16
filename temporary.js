ServerEvents.recipes(event => { 
  event.custom({
   type: "tfmg:casting",
   igredients: [
   {
     fluid: "embers:molten_bronze", 
     amount: 1,
   }
  ],
  processingTime: 300,
  results: [
  {
    item: "#forge:ingots/bronze", count: 1,
  }
 ]
  })
})