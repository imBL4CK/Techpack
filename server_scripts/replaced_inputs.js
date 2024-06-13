ServerEvents.recipes(e => {
    //Oil
    e.replaceInput(
      {}, // Arg 1: the filter
      'pneumaticcraft:oil',            // Arg 2: the item to replace
      'thermal:crude_oil'         // Arg 3: the item to replace it with
      // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    );
    e.replaceInput(
      {}, // Arg 1: the filter
      'ad_astra:oil',            // Arg 2: the item to replace
      'thermal:crude_oil'         // Arg 3: the item to replace it with
      // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    );
    e.replaceInput(
      {},
      'createdieselgenerators:crude_oil',
      'thermal:crude_oil'
    );
    //Plastic
    e.replaceInput(
      {},
      'tfmg:plastic_sheet',
      'pneumaticcraft:plastic'
    );
    const replaceI = [
      //Molten Plastic
      {
        filter: {},
        replace: [Fluid.of('tfmg:liquid_plastic')],
        into: [Fluid.of('pneumaticcraft:plastic')]
      },
      {
        filter: {},
        replace: 'tfmg:plastic_sheet',
        into: 'pneumaticcraft:plastic'
      }
    ]
    replaceI.forEach((replace) => {
        e.replaceInput(replace.filter, replace.replace, replace.into)
    });
})
