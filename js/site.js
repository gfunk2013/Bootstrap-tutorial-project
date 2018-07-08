
(function() {

    var $pickButton = $("#pickButton");

    $("#dropDown li a").on("click", function () {
        var reason = $(this).text();
        $pickButton.text(reason);
        $("#pickButton").parent().parent().find("label").each(function(){
            $(this).removeClass("active");
        });
        $pickButton.addClass("active")
    });

    $("#Dude").tooltip({
        placement:"below"
    })
    $("#Donny").tooltip({
        placement:"below"
    })
    $("#Maude").tooltip({
        placement:"below"
    })

    $("#car").carousel();

})();