ServerEvents.recipes(e =>{
    e.replaceOutput(
        {}, // Arg 1: the filter
        'pneumaticcraft:oil',            // Arg 2: the item to replace
        'thermal:crude_oil'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      );
      e.replaceOutput(
        {}, // Arg 1: the filter
        'ad_astra:oil',            // Arg 2: the item to replace
        'thermal:crude_oil'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      );
      e.replaceOutput(
        {}, // Arg 1: the filter
        'createdieselgenerators:crude_oil',            // Arg 2: the item to replace
        'thermal:crude_oil'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      );
      e.replaceOutput(
        {},
        'tfmg:plastic_sheet',            // Arg 2: the item to replace
        'pneumaticcraft:plastic'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      );
      const replaceO = [
        //Molten Plastic
        {
          filter: {},
          replace: [Fluid.of('tfmg:liquid_plastic')],
          into: [Fluid.of('pneumaticcraft:plastic')]
        }
      ]
      replaceO.forEach((replace) => {
          e.replaceInput(replace.filter, replace.replace, replace.into)
      });
})