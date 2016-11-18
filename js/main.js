$(document).ready(function () {

//------------focus for input-----//

    $(".wrap-input input").focusin(function() {
        $(this).closest('.wrap-input').addClass("focus-input");
    });
    $(".wrap-input input").focusout(function() {
        $(this).closest('.wrap-input').removeClass("focus-input");
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

//------------tooltip on page map-----//
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

//------------clear-input-click-cross-btn-----//



    $('.js-clear-input').click(function(){
        $(this).closest('.input-item').children('input').val('');
    });

//-----------------------------------//
//------------slider walkthrough-----//
//-----------------------------------//
    
    $("#owl-demo").owlCarousel({

        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        rewindNav:false,
        navigationText : false

    });
    
//-----------------------------------//
//------------map section------------//
//-----------------------------------//

    if($('#mapid').length) {
        var mymap = L.map('mapid').setView([51.505, -0.09], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw'
        }).addTo(mymap);

        L.marker([51.5, -0.09]).addTo(mymap);

        L.circle([51.508, -0.11], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(mymap);

        L.polygon([
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047]
        ]).addTo(mymap);
    }

});