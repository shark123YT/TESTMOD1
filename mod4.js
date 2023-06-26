// Adding elements:
elements.Cryotheum = {
    color: "#57d2ff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 10,
    tempHigh: -83,
    stateHigh: "ice",
    tempLow: -33400000,
    stateLow: "ice",
    state: "liquid",
    density: 1200,
    temp: -684,
};
elements.Petrotheum = {
    color: "#000000",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 1000,
    tempHigh: 137800,
    stateHigh: "plasma",
    tempLow: 1250,
    stateLow: "magma",
    state: "liquid",
    density: 2500,
    temp: 3090,
};
elements.Fluoid = {
    color: "#004cff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 1,
    tempHigh: 433,
    stateHigh: "steam",
    tempLow: 3,
    stateLow: "FluoidIce",
    state: "liquid",
    density: 680,
    burnTime: 900,
    burnInto: carbondioxide,
    burn: 20,
    temp: 8,
};
elements.FluoidIce = {
    color: "#5789ff",
    behavior: behaviors.WALL,
    category: "solids",
    tempHigh: 3,
    stateHigh: "Fluoid",
    state: "solid",
    density: 660,
    temp: -4,
};

