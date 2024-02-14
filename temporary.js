ServerEvents.recipes(event => { 
 event.custom({
  type: ""
  igredients:[{item: ""}]
  result: [{}]
 })
})
//ethernal stella
{
  "additional_requirements": {
    "forge_tier": 1
  },
  "essences": {
    "aureal":25,
    "blood": 250,
    "experience": 0,
    "souls": 1
  },
  "inputs": [
    {
      "amount": 3,
      "ingredient": {
        "item": thermal:redstone_coil"
      }
    },
    {
      "amount": 1,
      "ingredient": {
        "item": "forbidden_arcanus:stellarite_piece"
      }
    }
  ],
  "main_ingredient": {
    "item": "minecraft:diamond"
  },
  "result": {
    "type": "forbidden_arcanus:create_item",
    "result_item": {
      "Count": 1,
      "id": "gi"
    }
  }
}