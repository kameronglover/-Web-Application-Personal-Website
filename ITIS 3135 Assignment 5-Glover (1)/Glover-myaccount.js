
$(document).ready(function(){
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?id=185665018@N05&format=json&jsoncallback=?";
    $.getJSON(url, function(data){
        var html = "";
        $.each(data.items, function(i, item){
            html += "<a href=" + item.media.m +
                " data-lightbox="
                + item.title + "><img src=" + item.media.m + "></a>";
        });
        $("#new_item").html(html);
    });
});