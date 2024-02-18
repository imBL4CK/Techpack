ServerEvents.tags('item', event => {
event.add('forge:dusts/zinc', 'kubejs:zinc_dust'),
event.add('forge:plastic', 'tfmg:plastic_sheet'),
event.add('forge:plastic', 'pneumaticcraft:plastic'),
event.add('forge:dusts/sulfur','tfmg:sulfur_dust'),
event.add('forge:dusts', 'tfmg:sulfur_dust'),
event.add('forge:ingots/red_alloy', 'kubejs:red_alloy_ingot'),
event.add('forge:ingots', 'kubejs:red_alloy_ingot'),
//aluminium brass
event.add('forge:ingots/aluminium_brass', 'kubejs:aluminium_brass_ingot'),
event.add('forge:ingots', 'kubejs:aluminium_brass_ingot'),
event.add('forge:plates/aluminium_brass', 'kubejs:aluminium_brass_plate'), 
event.add('forge:plates', 'kubejs:aluminium_brass_plate'), 
//slag
event.add('forge:slag', 'tfmg:slag'),
//primitive tools
event.add('forge:tools/saw', 'kubejs:primitive_saw'),
event.add('forge:tools/hammer', 'kubejs:primitive_hammer'),
event.add('forge:tools/screwdriver', 'tfmg:screwdriver'),
event.add('forge:tools/wirecutter', 'kubejs:primitive_wirecutter'),
event.add('forge:tools/crowbar', 'kubejs:primitive_crowbar'),
//custom items
event.add('forge:plates/wooden', 'kubejs:wooden_board'),
event.add('forge:ingots', 'kubejs:draconium_ingot'),
event.add('forge:ingots/draconium', 'kubejs:draconium_ingot'),
event.add('forge:plates', 'kubejs:draconium_plate'),
event.add('forge:plates/draconium', 'kubejs:draconium_plate'),
event.add('forge:gears', 'kubejs:draconium_gear'),
event.add('forge:gears/draconium', 'kubejs:draconium_gear'),
event.add('forge:gears', 'kubejs:wooden_gear'),
event.add('forge:gears/wood', 'kubejs:wooden_gear'),
event.remove('forge:gears/wooden', 'kubejs:wooden_gear')
})