StartupEvents.registry('fluid', event => { 
    //Ice Coolant
        event.create('ice_coolant')
          .displayName('Ice Coolant')
          .stillTexture('kubejs:block/ice_coolant') 
          .flowingTexture('kubejs:block/ice_coolant')
          .bucketColor(0x4b70a2)
    })