/*
variable names and html strings have been adjusted
*/
var HTMLbioPic = '<img src="%data%" class="biopic" alt="Jennifer\'s headshot">';
var HTMLheaderRole = '<h2 class="role">%data%</h2>';
var HTMLheaderName = '<div><h1 class="name">%data%</h1><div>';

var HTMLPersonalSectionTitle = '<div class="section-title"><h2>Personal</h2></div>';
var HTMLPersonalContent = '<div id="personal-content" class="line content flex-box"></div>';
var HTMLabout = '<div id="about-me" class="flex-item violet"></div>';
var HTMLaboutTitle = '<h3 class="right-h3">%data%</h3>';
var HTMLwelcomeMsg = '<p>%data%</p>';
var HTMLBucketPhrase = '<div id="decor-phrase" class="flex-item clip-phrase bright-orange"></div>';
var HTMLBucketPicPersonal = '<div id="decor-pic" class="flex-item green img-clip"></div>';
var HTMLBucketPic = '<img src="img/cool0.jpg" alt="Decorative image">';
var HTMLDecorPhrase = '<p>%data%</p>';
var HTMLBucketContact = '<div id="contact" class="flex-item contact-section mustard personal"></div>';
var HTMLBucketContactTitle = '<h3 class="right-h3">%data%</h3>';
var HTMLContactList = '<ul id="contact-list"></ul>';
var HTMLmobile = '<li class="personal"><i class="fa fa-phone fa-icon" aria-hidden="true"></i> %data%</li>';
var HTMLemail = '<li class="personal"><i class="fa fa-envelope fa-icon" aria-hidden="true"></i> %data%</li>';
var HTMLtwitter = '<li class="personal"><i class="fa fa-twitter fa-icon" aria-hidden="true"></i> %data%</li>';
var HTMLgithub = '<li class="personal"><i class="fa fa-github-alt fa-icon" aria-hidden="true"></i> %data%</li>';
var HTMLlocation = '<li class="personal"><i class="fa fa-location-arrow fa-icon" aria-hidden="true"></i> %data%</li>';
var HTMLSkillsTitle = '<div class="section-title"><h2>Skills</h2></div>';
var HTMLSkillsContent = '<div id="skills-content" class="line content flex-box"></div>';
var HTMLSkillTextBucket = '<div class="flex-item skill standout">%data%</div>';
var HTMLSkillImgBucket = '<div class="flex-item skill img-clip-logo"><img src="%image%" alt="logo" /></div>';

var HTMLworkTitle = '<div class="section-title"><h2>Work Experience</h2></div>';
var HTMLworkContent = '<div id="work-content" class="line content flex-box"></div>';
var HTMLworkBucket = '<div class="flex-item work-entry"></div>';
var HTMLworkEmployer = '<h3 class="work-details">%data%</h3>';
var HTMLworkDates = '<div class="date-text work-details"><i class="fa fa-calendar" aria-hidden="true"></i> %data%</div>';
var HTMLjobTitle = '<h4 class="work-details"><i class="fa fa-female" aria-hidden="true"></i> %data%</h4>';
var HTMLworkLocation = '<div class="location-text work-details"><i class="fa fa-map-marker" aria-hidden="true"></i> %data%</div>';
var HTMLworkDescription = '<p class="description work-details">%data%</p>';

var HTMLprojectTitle = '<div class="section-title"><h2>Projects</h2></div>';
var HTMLprojectsContent = '<div id="projects-content" class="line content flex-box project-details"></div>';
var HTMLprojectBucket = '<div class="flex-item project-entry "></div>';
var HTMLprojectDates = '<div class="date-text project-details"><i class="fa fa-calendar" aria-hidden="true"></i> %data%</div>';
var HTMLprojectDescription = '<p class="description project-details">%data%</p>';
var HTMLprojectName = '<h3 class="project-details">%data%</h3>';

var HTMLprojectGallery = '<div class="project-gallery"></div>';
var HTMLprojectGalleryLeft = '<div class="left arrow unabled"><</div>';
var HTMLprojectGalleryImgSet = '<div class="image-set"></div>';
var HTMLprojectImgVisible = '<img src="%ulr-to-img%" alt="personal project image" class="gallery-img">';
var HTMLprojectImgHidden = '<img src="%ulr-to-img%" alt="personal project image" class="gallery-img img-hidden">';
var HTMLprojectGalleryRight = '<div class="right arrow abled">></div>';

var HTMLeducationTitle = '<div class="section-title"><h2>Education</h2></div>';
var HTMLeducationContent = '<div id="ed-content" class="line content flex-box"></div>';
var HTMLedBucket = '<div class="flex-item ed-entry"></div>';

var HTMLschoolMajor = '<h3></h3>';
var HTMLschoolDegree = '<h3 class="education-entry">%data%</h3>';
var HTMLschoolName = '<h4 class="education-entry">%data%</h4>';
var HTMLschoolDates = '<div class="date-text education-entry"><i class="fa fa-calendar" aria-hidden="true"></i> %data%</div>';
var HTMLschoolLocation = '<div class="location-text education-entry"><i class="fa fa-map-marker" aria-hidden="true"></i>  %data%</div>';
var HTMLschoolURL = '<a href="linkTo">%data%</a>';

var HTMLonlineTitle = '<h3 class="education-entry">%data%</h3>';
var HTMLonlineSchool = '<h4 class="education-entry">%data%</h4>';
var HTMLonlineDates = '<div class="date-text education-entry"><i class="fa fa-calendar" aria-hidden="true"></i> %data%</div>';
var HTMLonlineURL = '<a href="linkTo">%data%</a>';

var HTMLimgBucket = '<div class="flex-item cool-img"></div>'; // for generic or decorative images

var googleMap = '<div id="map"></div>';



/*
Generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {
  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      if(!school.location.includes("Online")) {
        locations.push(school.location);
      }
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      if(!job.location.includes("Online")){
        locations.push(job.location);
      }
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();
  // ??
  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
  // ??

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});
