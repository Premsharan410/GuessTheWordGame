 
$(document).ready(function(){
    $(".flip").click(function(){
    $(".panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#STARTimage").click(function(e){
        $(this).hide(); 
        $("#hiddenDiv").show(); 
    });
});
