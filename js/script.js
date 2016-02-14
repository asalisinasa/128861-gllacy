//////////////////// GoogleMaps ///////////////////////////////
///////////////////////////////////////////////////////////////

var mapCanvas = document.querySelector(".contacts__map");
function initialize() {     
  var centerMap = new google.maps.LatLng(59.939870, 30.318591);
  var initZoom = 16;
  var mapOptions = {
    center: centerMap,
    zoom: initZoom,
    maxZoom: 18,
    minZoom: 8,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var image = {
    url: "../img/icon/map-pin.png",
    anchor: new google.maps.Point(51, 190)
  };
    var markPos = new google.maps.LatLng(59.938840, 30.323056);
  var marker = new google.maps.Marker({
    position: markPos,
    icon: image,
    map: map
  });
};



//////////////////// FeedbackForm /////////////////////////////
///////////////////////////////////////////////////////////////

var link = document.querySelector(".adress-block__btn");
var popup = document.querySelector(".feedback-form");
var close = document.querySelector(".feedback-form__btn--close");

if (link != null && popup != null) { 
    var name = popup.querySelector("[name=name]");
    var email = popup.querySelector("[name=email]");
    var text = popup.querySelector("[name=text]");
    var form = popup.querySelector("form");

	link.addEventListener("click", function(event) {
	   event.preventDefault();
	   popup.classList.add("feedback-form--show");
	   popup.classList.remove("feedback-form--error");
	   name.focus()
    });
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (popup.classList.contains("feedback-form--show")) {
                popup.classList.remove("feedback-form--show");
                popup.classList.remove("feedback-form--error");
            }
        }
    });
    form.addEventListener("submit", function(event) {
        if (!name.value || !email.value) {
            event.preventDefault();
            popup.classList.remove("feedback-form--error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("feedback-form--error");
        }
    })
    close.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("feedback-form--show");
   });
    cancel.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("feedback-form--show");
   });
    mOverlay.addEventListener("click", function(e) {
      if (e.tsrget == modal.parentNode)
      popup.classList.remove("feedback-form--show");
   });
};