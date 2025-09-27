# Changelog

## 2025
---
### Saturday 27th September
* Added admin dashboard and user / api token management
* Added authentication
* Added request tracking on the backend
* Start cleaning up things under the hood

### Thursday 25th September
* Changed all API respones to return data from a root `results` array / object
* Added documentation for the charts endpoints:
  * [Parking Spaces Over Time](/docs/endpoints/charts/parking-over-time)
  * [Bus Passengers](/docs/endpoints/charts/bus-passengers)
  * [Driving Test Results](/docs/endpoints/charts/driving-test-results)
  * [Monthly Rainfall](/docs/endpoints/charts/monthly-rainfall)
  * [Road Traffic](/docs/endpoints/charts/road-traffic)
* Updated footer to remove the other projects

### Tuesday 13th May
* Fixed API health check endpoints
* Updated About page
* Improve Footer display using dark mode
* Other small improvements

### Wednesday 9th April
* Added [Monthly Rainfall](/charts/weather/monthly-rainfall) chart
* Better Chart loading state handling in the codebase
* Fix charts API endpoints being out of date
* Change [vehicle makes](/charts/transport/vehicle-makes) table size on charts page

### Tuesday 25th March
* Published rewrite of REST API
* Changed the following vehicle stats endpoint URLs: `colors`, `makes`, `models`
* Fixed some changelog links below
* Add health check endpoint for `data-fetcher` 
* Changed fetch time for product recalls to every 6 hours
* Add new mapbox token (maps are now fixed!)
* Fix latitude and longitude in bus stops response
* Add coordinates back to eatsafe data endpoint

## 2024
---
### Monday 30th December
* Added [Clip](https://clip.glitch.je) to the footer
* Begin adding support for a graph to track wait times at Customer & Local Services over time

### Wednesday 4th December
* Added fixed colours for the [Parking Spaces Over Time](/charts/transport/parking-over-time) chart (previously it would generate random colours on every request)

### Sunday 1st December
* Add proper date picker to [Parking Spaces Over Time](/charts/transport/parking-over-time) chart
* Changed eatsafe fetching job to run every 2 days rather than every hour (it cost a fortune in mapbox tokens!)
* Temporarily disabled coordinate fetching for eatsafe data until mapbox account issues are sorted out
* Added banner to Map page to state that the map is currently not working due to mapbox account issues
* Improve dark theme on chart buttons
* Make glitch.je text in footer actually clickable

### Thursday 14th November
* Changelog has been created!
* Added GitHub Actions workflow to automatically deploy the site