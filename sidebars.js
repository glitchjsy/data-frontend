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
    "changelog/index",
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
            "endpoints/carparks/lookup",
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
        {
          type: "category",
          label: "Charts",
          items: [
            "endpoints/charts/parking-over-time",
            "endpoints/charts/bus-passengers",
            "endpoints/charts/driving-test-results",
            "endpoints/charts/monthly-rainfall",
            "endpoints/charts/road-traffic"
          ]
        },
        "endpoints/recycling/index",
        "endpoints/defibrillators/index",
        // "endpoints/product-recalls/index",
        "endpoints/toilets/index",
        "endpoints/eatsafe/index"
      ]
    }
  ]
};

module.exports = sidebars;
