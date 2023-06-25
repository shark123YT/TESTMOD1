//this right here gents, is a mod!
// Adding elements:
elements.meth = {
    color: "#ccffff",
    behavior: behaviors.SOLID,
    category: "drugs",
    viscosity: 100000,
    state: "solid",
    density: 340,
};

elements.cocaine = {
    color: "#f2f2f2",
    behavior: behaviors.LIQUID,
    category: "drugs",
    viscosity: 100000,
    state: "liquid",
    density: 720,
};


// Adding behavior presets:
behaviors.SELFDELETE = [
    "XX|XX|XX",
    "XX|DL|XX",
    "XX|XX|XX",
];

// Raw JavaScript behaviors:
behaviors.mud.tick = function(pixel) {
    if (tryMove(pixel, pixel.x, pixel.y+1)) {
        console.log("Moved!");
    }
    else {
        console.log("Couldn't move!")
    }
};

// Create a new tool:
elements.trippytool = {
    color: "#ffe6ff",
    tool: function(pixel) {
        if (pixel.element == "cocaine","meth") {
            pixel.element = "explosion"
        }
    },
    category: "tools",
};

// Add reactions to existing elements
if (!elements.water.reactions) { // Include this block once
    elements.water.reactions = {} // This creates the property if it doesn't exist
}
elements.water.reactions.mayo = { "elem1":null, "elem2":"mayo_water" }
elements.water.reactions.soap = { "elem1":null, "elem2":"soapy_water" }

// Run after all mods are loaded, for cross-mod compatibility
runAfterLoad(function() {
    // Your code here
    console.log("Hello World!");
});

// Run if another mod is active
if (enabledMods.includes("test.js")) {
    runAfterLoad(function() {
        // Your code here
        console.log("Wassup!");
    });
}

eLists.DRUGS = ["meth","cocaine"];
