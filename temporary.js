ServerEvents.recipes(event => { 
 event.custom({
  type: ""
  igredients:[{item: ""}]
  result: [{}]
 })

 event.custom({
  type: "createindustry:casting",
  igredients: [
  {
    fluid: "#forge:molten_bronze", 
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
