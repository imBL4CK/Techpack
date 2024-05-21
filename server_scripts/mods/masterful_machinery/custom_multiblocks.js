MMEvents.createStructures(e=> {
    //Ebf
    e.create('mm:ebf_structure')
    .controllerId('mm:ebf_controller')
    .name('Electric Blast Furnace')
    .layout(l => {
        l.layer([
            'BBB',
            'BBB',
            '1C1'
        ]).layer([
            'WFW',
            'FUF',
            'WFW'
        ]).layer([
            'WPW',
            'PTP',
            'WPW'
        ]).layer([
            ' 2 ',
            'BFB',
            ' B '
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
        .key('1', {
            portType: 'mm:item'
        })
        .key('2', {
            portType: 'mm:energy'
        })
    })
}) 