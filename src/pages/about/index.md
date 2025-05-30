# About

**Jersey Open Data** (still figuring out a name) is a project dedicated to making open data from Jersey, Channel Islands, easily accessible and developer-friendly. Whether you're a data enthusiast, researcher, or developer, our goal is to provide you with live and comprehensive data in a consistent, predictable format.

Check out our [API Documentation](/docs/getting-started) to get started.

## Why?

The inspiration for this project comes from the challenges I’ve faced when working with government data in Jersey. The existing APIs often lack uniformity, offer little to no documentation, and aren’t very developer-friendly. I’ve also been motivated by platforms like [data.gg](https://data.gg), which showed me the potential of making data more accessible and useful.

We provide data in JSON format, with plans to support XML in the future. The data we offer comes from various sources:

- **Government APIs**: Live data directly remapped from Government API endpoints
- **Government Websites**: Live data that is scraped from Government websites when an API is not available
- **Static Data**: Manually collected, sometimes through FOI (Freedom of Information) requests.

:::info Please note
- **"Live Data"** refers to data that is updated frequently. For example, carpark space information may be updated every 5 minutes - this is considered live.
- **"Static Data"** refers to data that is rarely updated and is collected manually.
:::

## Get Involved
If you'd like to contribute to the codebase, please see the following GitHub repos:

* [Data API](https://github.com/glitchjsy/data-api) - Public API to access open data
* [Data Frontend](https://github.com/glitchjsy/data-frontend) - A docusaurus site that hosts API documentation for the Data API
* [Data Fetcher](https://github.com/glitchjsy/data-fetcher) - A program to periodically fetch data such as available carpark spaces

If you'd like to get in touch about anything else, email [luke@glitch.je](mailto:luke@glitch.je?subject=Glitch.je%20Open%20Data).

## Sponsors & Donations
If you'd like to donate to sponsor the project to help cover hosting costs and my development time, you can do so with the following links:

* [GitHub Sponsors (monthly)](https://github.com/sponsors/lukeeey)
* [Buy Me a Coffee (one-time)](https://buymeacoffee.com/lukeeey)

## Future Plans
In the near future I will add a load of charts for most of the data on [opendata.gov.je](https://opendata.gov.je), similar to how [data.gg](https://data.gg/charts) works. Work on this has [already begun](/charts).