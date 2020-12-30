$(document).ready(function() {
    $("#accordion").accordion({collapsible:true})
});
$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "information.json",
        beforeSend: function () {
            $("#information").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            $("#information").html("");
            $.getJSON("information.json", function (data) {
                $.each(data, function () {
                    $.each(this, function (key, value) {
                        $("#information").append(
                            "<h3>Name: " + value.name + "</h3>" +
                            "<b>Number:</b> " + value.number + "<br>" +
                            "<b>Email:</b> " + value.email + "<br>");
                    });
                });

            });

        }
    });
});