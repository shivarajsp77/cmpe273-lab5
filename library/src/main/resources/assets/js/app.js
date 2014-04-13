$(":button").click(function() {
        var isbn = this.id;
        alert('About to report lost on ISBN ' + isbn);
        useIsbn(isbn);
        $("button#"+isbn).attr("disabled","disabled");
        window.location.reload(true);
});

$(document).ready(function(){
    var items = $('td[title="status"]');
    for( i=0; i<items.length; i++ ){
            var status = items[i].innerHTML;
            var isbn = items[i].id.slice("6");
            var secId = "button#"+isbn;
            if(status == "lost")
                    {
                            $(secId).attr("disabled",true);
                    }
            else{
                    $(secId).removeAttr("disabled");
            }
    }
    
});

function useIsbn(isbn)
{
        $.ajax({
            type: "PUT",
            url: "/library/v1/books/"+isbn+"?status=lost",
            contentType: "application/json",
            success: function(data) {
            	$("#status_"+isbn).html("lost");
                $("#"+isbn).attr("disabled","disabled");
                
            },
            error: function() {
           
            }
        });
        $(status).text("lost")
        
}
