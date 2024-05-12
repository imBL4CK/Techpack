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
        {}, // Arg 1: the filter
        'createdieselgenerators:crude_oil',            // Arg 2: the item to replace
        'thermal:crude_oil'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      );
      //Plastic
      e.replaceInput(
        {}, // Arg 1: the filter
        'tfmg:plastic_sheet',            // Arg 2: the item to replace
        'pneumaticcraft:plastic'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      );
})
