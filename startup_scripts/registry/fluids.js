StartupEvents.registry('fluid', event => { 
    //Ice Coolant
        event.create('ice_coolant')
          .displayName('Ice Coolant')
          .stillTexture('kubejs:block/ice_coolant_still') 
          .flowingTexture('kubejs:block/ice_coolant_flow')
          .bucketColor(0x4b70a2)
    })