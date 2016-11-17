$(document).ready(function () {

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

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $("#owl-demo").owlCarousel({

        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        rewindNav:false,
        navigationText : false

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
});