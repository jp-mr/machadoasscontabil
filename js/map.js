// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
    var that = $(this);
    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);


//// Google Map API

//function initMap(){
//  var location = new google.maps.LatLng(-22.9241528,-45.46106629999997)
//  var mapCanvas = document.getElementById('gmap_canvas')
//
//  var myOptions = {
//    zoom:18,
//    center:location,
//    mapTypeId: google.maps.MapTypeId.ROADMAP
//  };
//
//  var map = new google.maps.Map(mapCanvas, myOptions);
//
//  var markerImage = 'img/marker.png';
//
//  marker = new google.maps.Marker({
//    map: map,
//    position: location,
//    icon: markerImage,
//    maxWidth: 500
//  });
//
//  var contentString = '<strong>Mult Tecnologia - UNIDADE: Pindamonhagaba</strong><br>Av. Cel. Fernando Prestes, 60 - Centro, Pindamonhangaba - SP, 12400-240<br>';
//
//  infowindow = new google.maps.InfoWindow({
//    content: contentString,
//  });
//  
//  google.maps.event.addListener(marker, 'click', function(){
//    infowindow.open(map,marker);
//  });
//  
//  infowindow.open(map,marker);
//}
//google.maps.event.addDomListener(window, 'load', initMap);
