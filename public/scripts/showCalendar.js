$(document).ready(function() {
    $("#datepicker").datepicker({
        showOn: "button",
        buttonImage: "../public/images/calendar.png",
        buttonImageOnly: true,
        buttonText: "Select date"
    });

    $('.calendar-btn-box img').click(function() {
        $("#datepicker").datepicker("show");
    });
});