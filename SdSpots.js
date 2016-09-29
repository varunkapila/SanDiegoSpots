$(document).ready(function(){

  $.getJSON("SdSpots.json", function(spots) {
 
    $.each(spots.topspots, function(key, val) {
       $('table').append('<tr><td>'+val.name+'</td><td>'+val.description+'</td><td><a href=https://www.google.com/maps?q='+ val.location[0] + "," + val.location[1] + "><button type='button' class= 'btn btn-primary'>Open in Google Maps!</button></a>" + "</td></tr>");
  
  });

  })
});

