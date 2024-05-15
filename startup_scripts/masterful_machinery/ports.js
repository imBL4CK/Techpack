MMEvents.registerPorts(e => {
    //Steel Energy Hatch
    e.create('steel_energy_hatch')
    .name('Steel Energy Port')
    .controllerId('mm:ebf_controller')
    .config('mm:energy', c => {
    c.capacity(16000)
        .maxReceive(256)
        .maxExtract(256);
    })
    //Steel Item Hatch
    e.create('steel_item_hatch')
    .name('Steel Item Hatch')
    .controllerId('mm:ebf_controller')
    .config('mm:item', c => {
    c.rows(2)
     .columns(2)
    })
})