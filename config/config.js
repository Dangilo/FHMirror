/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "", "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "de",
	timeFormat: 24,
	units: "metric",

	modules: [{
			module: "alert",
		},
		{
			module: "fhwedel",
			position: "top_right",
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "FH Kalender",
			position: "top_left",
			config: {
				calendars: [{
					symbol: "calendar-check-o ",
					url: "webcal://www.fh-wedel.de/online-campus/termine/kalender/gesamt/fh-wedel-oeffentlich/ansicht/ics/kalender.ics"
				}]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [{
					title: "New York Times",
					url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
				}],
				showSourceTitle: true,
				showPublishDate: true
			}
		}, 
		{
			module: 'MMM-PIR-Sensor',
			config: {
				// See 'Configuration options' for more information.
			}
		},
	
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}