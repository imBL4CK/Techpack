ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'pneumaticcraft:oil' }, // Arg 1: the filter
        'pneumaticcraft:oil',            // Arg 2: the item to replace
        'thermal:crude_oil'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      );
      event.replaceInput(
        { input: 'ad_astra:oil' }, // Arg 1: the filter
        'ad_astra:oil',            // Arg 2: the item to replace
        'thermal:crude_oil'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      );
      event.replaceInput(
        { input: 'createdieselgenerators:crude_oil' }, // Arg 1: the filter
        'createdieselgenerators:crude_oil',            // Arg 2: the item to replace
        'thermal:crude_oil'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      );
      event.replaceInput(
        {}, // Arg 1: the filter
        'tfmg:plastic_sheet',            // Arg 2: the item to replace
        'pneumaticcraft:plastic'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      );
});
ServerEvents.recipes(event => {
    event.replaceOutput(
        { output: 'pneumaticcraft:oil' }, // Arg 1: the filter
        'pneumaticcraft:oil',            // Arg 2: the item to replace
        'thermal:crude_oil'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      );
      event.replaceOutput(
        { output: 'ad_astra:oil' }, // Arg 1: the filter
        'ad_astra:oil',            // Arg 2: the item to replace
        'thermal:crude_oil'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      );
      event.replaceOutput(
        { output: 'createdieselgenerators:crude_oil' }, // Arg 1: the filter
        'createdieselgenerators:crude_oil',            // Arg 2: the item to replace
        'thermal:crude_oil'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      );
      event.replaceOutput(
        {},
        'tfmg:plastic_sheet',            // Arg 2: the item to replace
        'pneumaticcraft:plastic'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )
})