StartupEvents.registry('item', event =>{
    event.create('wooden_gear').displayName('Wooden Gear')
}),

StartupEvents.registry('item', event =>{
    event.create('primitive_saw', 'axe')
    .displayName('Primitive Saw')
    .maxStackSize(1)
    .tier ('iron',)
    .maxDamage(80)
    .attackDamageBaseline(1)
}),

StartupEvents.registry('item', event =>{
    event.create('primitive_hammer', 'pickaxe')
    .displayName('Primitive Hammer')
    .maxStackSize(1)
    .tier ('stone',)
    .maxDamage(80)
    .attackDamageBaseline(1)
}),

StartupEvents.registry('item', event =>{
    event.create('primitive_wirecutter','sword')
    .displayName('Primitive Wirecutter')
    .maxStackSize(1)
    .tier ('wooden',)
    .maxDamage(80)
    .attackDamageBaseline(1)
}),

StartupEvents.registry('item', event =>{
    event.create('primitive_crowbar','sword')
    .displayName('Primitive Crowbar')
    .maxStackSize(1)
    .tier ('wooden',)
    .maxDamage(80)
    .attackDamageBaseline(1)
}),

StartupEvents.registry('item', event =>{
    event.create('makeshift_mechanism').displayName('Makeshif Mechanism')
}),

StartupEvents.registry('item', event =>{
    event.create('commum_techcoin').displayName('Commum Techcoin')
    .rarity('common')
}),

StartupEvents.registry('item', event =>{
    event.create('uncommum_techcoin').displayName('Uncommum Techcoin')
    .rarity('uncommon')
}),

StartupEvents.registry('item', event =>{
    event.create('rare_techcoin').displayName('Rare Techcoin')
    .rarity('rare')
}),

StartupEvents.registry('item', event =>{
    event.create('legendary_techcoin').displayName('Legendary Techcoin')
    .rarity('legendary')
}),

StartupEvents.registry('item', event =>{
    event.create('golden_hand').displayName('Golden Hand')
    event.create('wooden_board').displayName('Wooden Board')
    event.create('zinc_dust').displayName('Zinc Dust')  
    //redpower
    event.create('red_alloy_ingot').displayName('Red Alloy Ingot')
    event.create('red_alloy_plate').displayName('Red Alloy Plate')
    event.create('red_alloy_gear').displayName('Red Alloy Gear')
    //thaumcraft
    event.create('aluminium_brass_ingot').displayName('Aluminium Brass Ingot')
    event.create('aluminium_brass_plate').displayName('Aluminium Brass Plate')
    event.create('aluminium_brass_gear').displayName('Aluminium Brass Gear')
    //draconic
    event.create('draconium_ingot').displayName('Draconium Ingot')
    event.create('draconium_plate').displayName('Draconium Plate')
    event.create('draconium_gear').displayName('Draconium Gear')
    //enderIO endergy
    event.create('melodic_alloy_ingot').displayName('Melodic Alloy Ingot')
    event.create('crystalline_pink_slime_ingot').displayName('Crystalline Pink Slime Ingot')
    event.create('vivid_alloy_ingot').displayName('Vivid Alloy Ingot')
    event.create('energetic_silver_ingot').displayName('Energetic Silver Ingot')
    event.create('crystalline_alloy_ingot').displayName('Crystalline Alloy Ingot')
    event.create('stellar_alloy_ingot').displayName('Stellar Alloy Ingot')
    event.create('crude_steel_ingot').displayName('Crude Steel Ingot')
})