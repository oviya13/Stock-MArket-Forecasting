/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	
	    electronOptions: {
		webPreferences: {
		    webviewTag: true
		    }
		},
	    
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
	
		{
			module: "alert",
		},
		{
			module: "MMM-GoogleAssistant",
			configDeepMerge: true,
			config: {
			   
			assistantConfig: {
				latitude: 51.508530,
				longitude: -0.076132,
		},

		}

		},
		{
			module: 'Gateway',
			config: {
			debug: false,
					username: "admin",
					password: "admin",
					usePM2: false,
					PM2Id: 0,
					CLIENT_ID: null
		}
		},
		{
			module: "EXT-Detector",
			position: "top_left",
			configDeepMerge: true
		},
		{
			module: 'EXT-Librespot',
			config: {
				debug: false,
				email: "afnaanafu7@gmail.com",
				password: "Allah@786tm",
				deviceName: "MagicMirror",
				minVolume: 50,
				maxVolume: 100
		}
		},
		{
			module: 'EXT-Spotify',
			position: 'bottom_right',
			config: {
				updateInterval: 1000,
				idleInterval: 10000,
				useBottomBar: true,
				useSpotify: true,
				CLIENT_ID: "511f610c743549b891366276fd09c325",
				CLIENT_SECRET: "db7a90d1040f43288bfd92b1a9a82623",
				mini: true,
				forceSCL: false,
				noCanvas: false,
				
		}
		},
		{
		module: "EXT-YouTube",
		position: "center", // optional (can be deleted if using fullscreen)
		    config: {
		fullscreen: false,
		width: "15vw",
		height: "15vh",
		useSearch: true,
		alwaysDisplayed: true,
		displayHeader: true,
		username: null,
		password: null
		}
		    },
		{
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left"
        },
        {
            module: "helloworld",
            position: "top_center",
            config: {
              text: "Hello from MagicMirror!",
            }
        },
        {
            module: "calendar",
            header: "India Holidays",
            position: "top_left",
            config: {
                calendars: [
                    {
                        maximumEntries: "5",
                        symbol: "calendar-check",
                        url: "webcal://www.calendarlabs.com/ical-calendar/ics/33/india-holidays.ics"
                    }
                ]
            }
        },
        {
            module: "compliments",
            position: "lower_third",
            config: {
                compliments: {
                morning: [
                  "Good morning sunshine :)",
                  "Who needs coffee when u have smile?",
                ],
                afternoon: [
                  "Good afternoon!",
                  "Hitting your stride!",
                  "You are making a difference!",
                ],
                evening: [
                  "Good eve!",
                  "You made someone smile today:)",
                  "You are making a difference.",
                  "Hope The day was better."
                ]
            }
              }
            },
                {
                  module: "weather",
                  position: "top_right",
                  config: {
                    weatherProvider: "openweathermap",
                    type: "current",
                    location: "Salem,IN",
                    locationID: "1257629",
                    apiKey: "7c4b3688f5a64067a90321f32f31712d"
                  },
                },
                {
                    module: "weather",
                    position: "top_right",
                    header: "Weather Forecast",
                    config: {
                    weatherProvider: "openweathermap",
                    type: "forecast",
                    location: "Salem,IN",
                    locationID: "1257629",
                    apiKey: "7c4b3688f5a64067a90321f32f31712d",
                    maxNumberOfDays: 3
                }
                },
        {
            module: "newsfeed",
            position: "bottom_center",
            config: {
                feeds: [
                    {
                        title: "The Hindu",
                        url: "https://www.thehindu.com/news/international/feeder/default.rss",
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true,
                broadcastNewsFeeds: true,
                broadcastNewsUpdates: true,
            }
        },
    ]
};
		

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
