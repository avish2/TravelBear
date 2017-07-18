$("#city-input #date-input").keyup(function(event){
    if(event.keyCode == 13){
        $("#search").click();
    }
});

