// Test File
// Maintainer: @WhenDawnEnds
// Last updated: 2022-07-16

require("dotenv").config()

// Checks are done at this point with the main app.
// Tokens available and in process.env:
// SPOTIFY_ACCESS_API
// SPOTIFY_REFRESH_API

// File metadata.
module.exports._METADATA = {
    name: 'Test Widget',                                    // Name of the module.
    maintainer: '@WhenDawnEnds',                            // @username
    description: 'Prints out the data from the widgets',    // Short description of the module.
    requires_init: true,                                    // Whether or not this module requires the init function to be run.
    deprecated: false,                                      // If true, the module will be removed from the app.
    requireTestStage: 2,                                    // Should be set to 2.
    widgetsRequired: [""],                                  // Array of widgets that this module requires.
    supportedVersion: "0.0.1",                              // The version of the app that this module was built with.

    // Metadata for identification internally.
    type: 2,                                                // 1 for app, 2 for widget, 3 for expansion.
}

module.exports._init = async function () {
    if (!(process.env.TEST_STAGE == 2)) {
        return false, "This module can only be used in TEST_STAGE 2."
    }
    return true
}

module.exports._run = async function () {
    let final = "This is a test widget."

    return final
}