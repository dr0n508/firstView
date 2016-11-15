$(document).ready(function () {

    $(".wrap-input input").focusin(function() {
        $(this).closest('.wrap-input').addClass("focus-input");
    });
    $(".wrap-input input").focusout(function() {
        $(this).closest('.wrap-input').removeClass("focus-input");
    });
});