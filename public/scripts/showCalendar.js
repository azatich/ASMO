$(document).ready(function() {
    $("#datepicker").datepicker({
        firstDay: 1,
        beforeShow: function() {
        }
    });

    $('#datepicker-button').click(function() {
        $("#datepicker").datepicker("show");
    });
});
