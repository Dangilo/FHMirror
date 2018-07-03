/* Magic Mirror
 * Module: fhWedel
 *
 * By Daniel Tamm
 * MIT Licensed.
 */

Module.register("fhwedel", {

  // Default module config.
  defaults: {
    text: "Hello World!",
    images: {
      fh_wedel: "../modules/images/fh_logo.png",
      smart_room: "../modules/images/smartRoom.png"
    },
    fadeSpeed: 1000,
    updateInterval: 10000
  },


  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = "<image src='" + this.getRandomImage() + "' width='400'>";
    return wrapper;
  },


  /**
   * start Method who sets the timer for reload
   */
  start: function () {
    console.log("starting fh_wedel");
    Log.info("Starting module: WEDEL");
    var self = this;

    setInterval(function () {
      self.updateDom(self.config.fadeSpeed);
    }, self.config.updateInterval);
  },

  /**
   * returns a random image (fhwedel or smartroom)
   */
  getRandomImage: function () {
    var images = [this.config.images.fh_wedel, this.config.images.smart_room];
    return images[Math.round(Math.random())];

  }
});