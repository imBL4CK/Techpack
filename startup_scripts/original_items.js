StartupEvents.registry('item', event =>{
//Wooden Gear
    event.create('wooden_gear').displayName('Wooden Gear')
//Primitive Saw
    event.create('primitive_saw', 'axe')
    .displayName('Primitive Saw')
    .maxStackSize(1)
    .tier ('iron',)
    .maxDamage(80)
    .attackDamageBaseline(1)
//Primitive Hammer
    event.create('primitive_hammer', 'pickaxe')
    .displayName('Primitive Hammer')
    .maxStackSize(1)
    .tier ('stone',)
    .maxDamage(80)
    .attackDamageBaseline(1)

//Primitive Wirecutter
    event.create('primitive_wirecutter','sword')
    .displayName('Primitive Wirecutter')
    .maxStackSize(1)
    .tier ('wooden',)
    .maxDamage(80)
    .attackDamageBaseline(1)

//Primitive Crowbar
    event.create('primitive_crowbar','sword')
    .displayName('Primitive Crowbar')
    .maxStackSize(1)
    .tier ('wooden',)
    .maxDamage(80)
    .attackDamageBaseline(1)
//Makesift Mecanism
    event.create('makeshift_mechanism')
    .displayName('Makeshif Mechanism')
//Commum Techcoin
    event.create('commum_techcoin')
    .displayName('Commum Techcoin')
    .rarity('common')
//Uncommum Techcoin
    event.create('uncommum_techcoin')
    .displayName('Uncommum Techcoin')
    .rarity('uncommon')
//Rare Techcoin
    event.create('rare_techcoin').displayName('Rare Techcoin')
    .rarity('rare')
//Legendary Techcoin
    event.create('legendary_techcoin').displayName('Legendary Techcoin')
    .rarity('legendary')
//Golden Hand
    event.create('golden_hand').displayName('Golden Hand')
//Wooden Board
    event.create('wooden_board').displayName('Wooden Board')
//Zinc Dust
    event.create('zinc_dust').displayName('Zinc Dust')  

    //Colored Alloys

//Red Ally Ingot
 event.create('red_alloy_ingot').displayName('Red Alloy Ingot')
//Red Alloy Plate
 event.create('red_alloy_plate').displayName('Red Alloy Plate')
//Red Alloy Gear
 event.create('red_alloy_gear').displayName('Red Alloy Gear')
//Red Alloy Wire
event.create('red_alloy_wire').displayName('Red Alloy Wire')
//Blue Alloy Ingot
event.create('blue_alloy_ingot')
.displayName('Blue Alloy Ingot')
//Blue Alloy Plate
event.create('blue_alloy_plate')
.displayName('Blue Alloy Plate')
//Blue Alloy Gear
event.create('blue_alloy_gear')
.displayName('Blue Alloy Gear')
//Blue Alloy Wire
event.create('blue_alloy_wire')
.displayName('Blue Alloy Wire')

    //thaumcraft

//Aluminium Brass Ingot
 event.create('aluminium_brass_ingot').displayName('Aluminium Brass Ingot')

//Aluminium Brass Plate
 event.create('aluminium_brass_plate').displayName('Aluminium Brass Plate')

//Aluminuum Brass Gear
 event.create('aluminium_brass_gear').displayName('Aluminium Brass Gear')

    //Draconic Evolution

//Draconium Ingot
 event.create('draconium_ingot')
.displayName('Draconium Ingot')

//Draconium Plate
 event.create('draconium_plate')
.displayName('Draconium Plate')

//Draconium Gear
event.create('draconium_gear')
.displayName('Draconium Gear')

   //enderIO endergy

//Melodic Alloy
 event.create('melodic_alloy_ingot')
.displayName('Melodic Alloy Ingot')

//Crystaline Pink Slime
 event.create('crystalline_pink_slime_ingot').displayName('Crystalline Pink Slime Ingot')

//Vivid Alloy 
 event.create('vivid_alloy_ingot')
.displayName('Vivid Alloy Ingot')

//Energetic Silver Ingot
 event.create('energetic_silver_ingot')
.displayName('Energetic Silver Ingot')

//Crystaline Alloy
 event.create('crystalline_alloy_ingot')
.displayName('Crystalline Alloy Ingot')

//Stellar Alloy
 event.create('stellar_alloy_ingot')
.displayName('Stellar Alloy Ingot')

//Crude Steel
 event.create('crude_steel_ingot')
.displayName('Crude Steel Ingot')

// Hot Ferrous pewter
event.create('hot_ferrous_pewter_ingot')
.displayName('Hot Ferrous Pewter Ingot')

//Ferrous pewter nugget
event.create('hot_ferrous_pewter_nugget')
.displayName('Hot Ferrous Pewter nugget')

//Ferrous Pewter
event.create('ferrous_pewter_ingot')
.displayName('Ferrous Pewter Ingot')

//Ferrous Pewter Plate
event.create('ferrous_pewter_plate')
.displayName('Ferrous Pewter Plate')

//Ferrous Pewter Nugget
event.create('ferrous_pewter_nugget')
.displayName('Ferrous Pewter Nugget')

//Conductive blend
event.create('conductive_blend')
.displayName('Conductive Blnd')

//Primitive Circuit
event.create('primitive_circuit')
.displayName('Primitive Circuit')

//Primitive Circuit Board
event.create('primitive_circuit_board')
.displayName('Primitive Circuit Board')

//Primitive IO Component
event.create('primitive_io_component')
.displayName('Primitive IO Component')

//Pewter Plate
event.create('pewter_plate')
.displayName('Pewter Plate')
//Ink and feather
event.create('ink_and_feather')
.displayName('Ink and Feather')
//Arcane Runic Slate
event.create('kubejs:empty_arcane_runic_slate')
.displayName('Arcane Runic Slate')
})
StartupEvents.registry('fluid', event => { 
//Ice Coolant
    event.create('ice_coolant')
      .displayName('Ice Coolant')
      .stillTexture('kubejs:block/ice_coolant') 
      .flowingTexture('kubejs:block/ice_coolant')
      .bucketColor(0x4b70a2)
})