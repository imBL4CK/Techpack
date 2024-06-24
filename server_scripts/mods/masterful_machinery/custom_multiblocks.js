MMEvents.createStructures(e=> {
    //Ebf
    e.create('mm:ebf_structure')
    .controllerId('mm:ebf_controller')
    .name('Electric Blast Furnace')
    .layout(l => {
        l
        .layer([
            ' e ',
            'BFB',
            ' B '
        ])
        .layer([
            'WPW',
            'PTP',
            'WPW'
        ])
        .layer([
            'WFW',
            'FUF',
            'WFW'
        ])
        .layer([
            'BBB',
            'BBB',
            'iCi'
        ])
        .key('B', {
            block: 'kubejs:ebf_bricks'
        })
        .key('W', {
            block: 'tfmg:fireproof_brick_reinforcement'
        })
        .key('U', {
            block: 'create:blaze_burner'
        })
        .key('P', {
            block: 'ad_astra:steel_pillar'
        })
        .key('T', {
            block: 'create:fluid_tank'
        })
        .key('F', {
            block: 'tfmg:steel_frame'
        })
        .key('i', {
            portType: 'mm:item'
        })
        .key('e', {
            portType: 'mm:energy'
        })
    })
}) 