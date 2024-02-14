ItemEvents.tooltip(event =>{
    event.addAdvanced(['createdieselgenerators:huge_diesel_engine'],(item, advanced, text) => {
        text.add(1, [
            Text.of('This motor only works with bio-fuels').red()
        ])
    })
    event.addAdvanced(['createdieselgenerators:large_diesel_engine'], (item, advanced, text) => {
        text.add(1, [ 
            Text.of('This motor only works with bio-fuels').red()
        ])
    })
    event.addAdvanced(['createdieselgenerators:diesel_engine'], (item, advanced, text) => {
        text.add(1, [ 
            Text.of('This motor only works with bio-fuels').red()
        ])
    })
})  