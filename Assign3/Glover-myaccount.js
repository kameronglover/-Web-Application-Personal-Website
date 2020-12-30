$( function() {
    $( "#drag" ).draggable();
    $( "#drop" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" )
                .find( "p" )
                .html( "Your item is now placed in your bag" );
        }
    });
} );

$(document).ready(function() {


    // preload the image for each link
    $("#image_list1 a").each(function(){
        var swap = new Image();
        swap.src = $(this).attr("href");
    });

    // set up the event handlers for each link
    $("#image_list1 a").click(function(evt){


        // get the image URL and caption for each image
        var imageURL = $(this).attr("href");
        var caption = $(this).attr("title");

        $("#image").fadeOut(1000,function () {
            $("#image").attr("src", imageURL).fadeIn(1000);
        });


        $("#caption").fadeOut(1000, function(){
            $("#caption").text(caption).fadeIn(1000);
        });
        // cancel the default action of each link
        evt.preventDefault();

    });

    // move the focus to the first link
    $("li:first-child a").focus();
}); // end ready