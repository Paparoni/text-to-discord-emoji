function discordMoji(text) {
    var i = 0;
    var mojiArray = [];
    for (i; i < text.length; i++){
        mojiArray.push(":regional_indicator_"+text.charAt(i)+":");
    }
    
    return mojiArray.join(' ');
    
    
        
}

$( document ).ready(function() {
    $("#main-box").height(200);
    $("#result-box").height(200);
    $("#main-box").width(400);
    $("#result-box").width(400);
    
    $("#mock").click(function(){
        var text = $("#main-box").val();
        var result = discordMoji(text);
        $("#result-box").val(result);
    })
});
