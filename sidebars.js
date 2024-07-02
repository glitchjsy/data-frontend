/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    "getting-started/index",
    "errors/index",
    {
      type: "category",
      label: "Endpoints",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Carparks",
          items: [
            "endpoints/carparks/index",
            "endpoints/carparks/parking-spaces"
          ]
        },
        {
          type: "category",
          label: "Vehicles",
          items: [
            "endpoints/vehicles/index",
            "endpoints/vehicles/lookup",
            "endpoints/vehicles/colors",
            "endpoints/vehicles/makes",
            "endpoints/vehicles/models"
          ]
        },
        {
          type: "category",
          label: "Buses",
          items: [
            "endpoints/buses/stops",
          ]
        },
        "endpoints/recycling/index",
        "endpoints/defibrillators/index",
        "endpoints/product-recalls/index",
        "endpoints/toilets/index"
      ]
    }
  ]
};

module.exports = sidebars;
