/* globals google $ */
$(document).ready(function () {
  var zipcode = '06460';
  var url = '';

  function movemap (lat, lng, map, marker) {
    var newlatlng = new google.maps.LatLng(lat, lng);
    map.setCenter(newlatlng);
    marker.setPosition(newlatlng);
  };

  // create a Latlng object containing the coordinate for the center of the map
  var latlng = new google.maps.LatLng(41.224272, -73.0034821);

  // prepare the map properties
  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  // initialize the map object
  var map1 = new google.maps.Map(document.getElementById('google-map'), options);

  // add Marker
  var marker1 = new google.maps.Marker({
    position: latlng, map: map1
  });

  $('#zip-btn').click(function () {
    zipcode = $('#zip-field').val();
    url =
      'https://maps.googleapis.com/geocode/api/json?address=' +
      zipcode +
      '&key=AIzaSyApG1PalXWLlsns3eo5AAL-1DQKap_JZCY' +
      '&callback=?';
    $.getJSON(url, function (res) {
    });
    var newLat = 38.7738072;
    var newLng = -77.1459617;
    movemap(newLat, newLng, map1, marker1);
  });

});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown () {
  document.getElementById('ham-dropdown').classList.toggle('show');
}

function filterFunction () {
  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();
  var div = document.getElementById('myDropdown');
  var a = div.getElementsByTagName('a');
  for (var i = 0; i < a.length; i++) {
    if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = '';
    } else {
      a[i].style.display = 'none';
    }
  }
}
