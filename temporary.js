ServerEvents.recipes(event => { 
 event.custom({
  {
    "additional_requirements": {
      "forge_tier": 1
    },
    "essences": {
      "aureal": 82,
      "blood": 1000,
      "experience": 0,
      "souls": 1
    },
    "inputs": [
      {
        "amount": 3,
        "ingredient": {
          "item": "forbidden_arcanus:xpetrified_orb"
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
        "id": "thermal:rf_coil"
      }
    }
  }
  })
})
//ethernal stella
