MMEvents.registerControllers(e => {
    e.create("ebf_controller")
        .name("Electric Blast Furnace Controller")
        .type("mm:machine");
    e.create('refined_fuel_generator_controller')
        .name('Refined Fuel Generator Controller')
        .type('mm:machine');
});