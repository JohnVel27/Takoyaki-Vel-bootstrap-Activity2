$(document).ready(function(){
    var $grid = $('.grid').isotope({
        itemSelector: '.col-md-4',
        layoutMode: 'fitRows'
    });
    $('.filters_menu li').click(function(){
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(14.4135, 120.9406), // Coordinates of EAC Cavite
        zoom: 15, // Zoom level for better visibility
        mapTypeId: google.maps.MapTypeId.ROADMAP // Default map type
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Display the current year in the footer
document.addEventListener("DOMContentLoaded", function() {
    var displayYear = document.getElementById('displayYear');
    var currentYear = new Date().getFullYear();
    displayYear.textContent = currentYear;
  });
  

  
  
  